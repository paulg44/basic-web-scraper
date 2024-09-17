const { url } = require("inspector");
const playwright = require("playwright");

async function scrapeWebsiteURL(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  const result = page.url();

  console.log(result);
  return result;
}

scrapeWebsiteURL("https://www.instagram.com/p/C__B59Vgd0T/?hl=pa")
  .then((data) => {
    const substringFromURL = data.substring(data.length - 17);
    const urlResult = substringFromURL.substring(0, 11);
    console.log(urlResult);
  })
  .catch((e) => {
    console.error(e);
  });
