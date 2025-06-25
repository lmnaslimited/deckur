// Below const are node modules, so that needs to be in standard module names 
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Define an asynchronous function to generate a PDF from a webpage
async function fnGeneratePDF() {
  // Launch a new instance of a headless browser
  const LdBrowser = await puppeteer.launch();

  // Open a new page (tab) in the browser
  const LdPage = await LdBrowser.newPage();

  // Navigate to the specified URL and wait until the network is idle (no more requests for at least 500 ms)
  await LdPage.goto('http://localhost:3000/tank-vision', {
    waitUntil: 'networkidle0',
  });

  // Generate a PDF of the page with specific dimensions and no margins
  const LdPdfBuffer = await LdPage.pdf({
    width: '297mm', 
    height: '168mm', 
    printBackground: true, // Include background graphics in the PDF
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }, // No margins
  });

  // Set the viewport size (browser window dimensions); useful if needed for visual rendering before screenshot/PDF
  await LdPage.setViewport({
    width: 1920,
    height: 1080,
  });

  // Define the path to save the PDF file
  const LdOutputPath = path.resolve(__dirname, '../public/LENS-deck.pdf');

  // Write the PDF buffer to the file system at the defined path
  fs.writeFileSync(LdOutputPath, LdPdfBuffer);

  // Close the browser instance to free up resources
  await LdBrowser.close();

  // Log a confirmation message with the saved PDF path
  console.log('✅ PDF generated at:', LdOutputPath);
}

// Invoke the PDF generation function and catch any errors that occur during execution
fnGeneratePDF().catch(console.error);
