const playwright = require("playwright");

async function scrapeWebsiteURL(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  await page.getByRole("button", { name: /allow all cookies/i }).click();

  // await page.waitForSelector("a");
  await page.waitForSelector("section");

  // const links = await page.getByRole("link").all();

  const hrefs = await page.evaluate(() => {
    const mainSection = document.querySelector("article");

    if (mainSection) {
      return Array.from(document.links).map((item) => item.href);
    }
    return [];
  });

  console.log(hrefs);

  await browser.close();
}

// scrapeWebsiteURL("https://www.instagram.com/shardlowstjamesfc/?hl=pa").then(
//   (data) => {
//     const substringFromURL = data.substring(data.length - 17);
//     const urlResult = substringFromURL.substring(0, 11);
//     console.log(urlResult, data);
//   }
// );

scrapeWebsiteURL("https://www.instagram.com/shardlowstjamesfc");
