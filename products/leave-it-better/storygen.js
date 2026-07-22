const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.resolve('stories.html'), { waitUntil: 'networkidle' });
  for (const id of ['s1','s2','s3','s4']) {
    await page.locator('#'+id).screenshot({ path: `story-leave-it-better-${id}.png` });
    console.log('wrote', id);
  }
  await browser.close();
})();
