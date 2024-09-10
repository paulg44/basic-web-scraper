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

scrapeWebsiteURL("https://www.instagram.com/shardlowstjamesfc/?hl=pa")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });
