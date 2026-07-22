const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.resolve('payhip-cover.html'), { waitUntil: 'networkidle' });
  // EN
  await page.locator('#cover').screenshot({ path: 'cover-payhip-EN.png' });
  console.log('EN done');
  // ES: swap text
  await page.evaluate(() => {
    document.getElementById('topline').textContent = 'Un Kit Familiar de Campamento';
    document.getElementById('title').textContent = 'Déjalo Mejor';
    document.getElementById('title').style.fontSize = '110px';
    document.getElementById('sub').textContent = 'Cría niños que amen y cuiden la naturaleza';
    document.getElementById('desc').textContent = 'Juegos, insignias y reglas familiares que convierten a tus hijos en Guardabosques Junior, para que de verdad quieran cuidar la naturaleza.';
    const pills = document.getElementById('pills');
    pills.children[0].textContent = '📖 15 páginas imprimibles';
    pills.children[1].textContent = '🎮 Juegos + insignias';
    pills.children[2].textContent = '✍️ Pacto + certificado';
    document.getElementById('ages').textContent = 'De 4 a 10 años';
    document.getElementById('lang').textContent = 'Inglés + Español';
  });
  await page.waitForTimeout(200);
  await page.locator('#cover').screenshot({ path: 'cover-payhip-ES.png' });
  console.log('ES done');
  await browser.close();
})();
