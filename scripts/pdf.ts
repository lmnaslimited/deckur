const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function fnGeneratePDF() {
  const Browser = await puppeteer.launch();
  const Page = await Browser.newPage();

  await Page.goto('http://localhost:3000/deck', {
    waitUntil: 'networkidle0',
  });

  const PdfBuffer = await Page.pdf({
    width: '297mm',
    height: '168mm',
    printBackground: true,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  });
  

  await Page.setViewport({
    width: 1920,
    height: 1080,
  });

  const OutputPath = path.resolve(__dirname, '../public/LENS-deck.pdf');
  fs.writeFileSync(OutputPath, PdfBuffer);

  await Browser.close();
  console.log('✅ PDF generated at:', OutputPath);
}

fnGeneratePDF().catch(console.error);
