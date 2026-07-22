const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1500 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.resolve('pins.html'), { waitUntil: 'networkidle' });
  for (const id of ['pin1','pin2','pin3']) {
    await page.locator('#'+id).screenshot({ path: `pin-leave-it-better-${id.slice(3)}.png` });
    console.log('wrote', id);
  }
  await browser.close();
})();
