const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport:{width:800,height:500}, deviceScaleFactor:2 });
  await p.goto('file://'+path.resolve('shopcov.html'),{waitUntil:'networkidle'});
  await p.locator('.card').screenshot({ path:'/home/user/Bear-Card/shop/emergency-kit.png' });
  console.log('done'); await b.close();
})();
