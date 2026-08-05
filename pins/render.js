const { chromium } = require('playwright');
const path = require('path');

const pins = [
  'pin-explorer-en',
  'pin-trailblazer-en',
  'pin-bundle-en',
  'pin-aspire-en',
  'pin-explorer-es',
  'pin-trailblazer-es',
  'pin-bundle-es',
  'pin-aspire-es',
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  });
  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, 'generator.html');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  for (const id of pins) {
    const el = await page.$('#' + id);
    if (!el) { console.log('NOT FOUND:', id); continue; }
    const outFile = path.resolve(__dirname, id + '.png');
    await el.screenshot({ path: outFile });
    console.log('Saved:', outFile);
  }

  await browser.close();
  console.log('Done. ' + pins.length + ' pins rendered.');
})();
