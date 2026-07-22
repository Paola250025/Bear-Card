const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport:{width:850,height:1100}, deviceScaleFactor:2 });
  await p.goto('file://'+path.resolve('emergency-en.html'),{waitUntil:'networkidle'});
  await (await p.$$('.page'))[0].screenshot({ path:'/home/user/Bear-Card/emergency-kit/previews/cover.png' });
  console.log('preview cover done');
  await b.close();
})();
