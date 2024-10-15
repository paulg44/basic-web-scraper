const playwright = require("playwright");

async function scrapeBasicWebsite(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  await page.getByRole("link", { name: /shop/i }).click();

  const allHrefsFromShopPage = await page.evaluate(() => {
    const shopContainer = document.querySelector(".shopItems");

    if (shopContainer) {
      return Array.from(document.links).map((item) => item.href);
    }
    return [];
  });

  console.log(allHrefsFromShopPage);

  await browser.close();
}

scrapeBasicWebsite("https://www.ssjfc.co.uk");
