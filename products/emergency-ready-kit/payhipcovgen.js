const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport:{width:1080,height:1350}, deviceScaleFactor:2 });
  await p.goto('file://'+path.resolve('payhipcov.html'),{waitUntil:'networkidle'});
  await p.locator('#cover').screenshot({ path:'cover-payhip-EN.png' }); console.log('EN');
  await p.evaluate(()=>{
    top.document; 
    document.getElementById('top').textContent='Un kit familiar de emergencia';
    document.getElementById('title').innerHTML='Lista<br>para Todo';
    document.getElementById('sub').textContent='Tranquilidad, no miedo';
    document.getElementById('desc').textContent='Sabe exactamente qué empacar para estar lista en casa, en el carro y en el camping, sin agobio.';
    document.getElementById('age').textContent='Para principiantes';
    document.getElementById('lang').textContent='Inglés + Español';
  });
  await p.waitForTimeout(150);
  await p.locator('#cover').screenshot({ path:'cover-payhip-ES.png' }); console.log('ES');
  await b.close();
})();
