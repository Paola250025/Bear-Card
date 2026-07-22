const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const files = process.argv.slice(2); // pairs: input.html output.pdf
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  });
  const page = await browser.newPage();
  for (let i = 0; i < files.length; i += 2) {
    const input = path.resolve(files[i]);
    const output = path.resolve(files[i + 1]);
    await page.goto('file://' + input, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: output,
      width: '8.5in',
      height: '11in',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });
    console.log('wrote', output);
  }
  await browser.close();
})();
