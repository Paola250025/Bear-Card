const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await page.goto('file://' + path.resolve('platform-assets.html'), { waitUntil: 'networkidle' });
  const jobs = [['ig','ig-feed-post.png'],['fb','facebook-post.png'],['tk','tiktok-cover.png']];
  for (const [id,out] of jobs) { await page.locator('#'+id).screenshot({ path: out }); console.log('wrote', out); }
  await browser.close();
})();
