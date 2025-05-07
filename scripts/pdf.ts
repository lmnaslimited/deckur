const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/deck', {
    waitUntil: 'networkidle0',
  });

const pdfBuffer = await page.pdf({
    width: '297mm',
    height: '168mm',
    printBackground: true,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  });
  

  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  const outputPath = path.resolve(__dirname, '../public/LENS-deck.pdf');
  fs.writeFileSync(outputPath, pdfBuffer);

  await browser.close();
  console.log('✅ PDF generated at:', outputPath);
}

generatePDF().catch(console.error);
