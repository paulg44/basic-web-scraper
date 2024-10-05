const playwright = require("playwright");

async function scrapeWebsiteURL(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  await page.waitForSelector("a");

  const links = await page.getByRole("link").all();

  // if (links.length > 0) {
  //   const firstHrefLink = await links[0].getAttribute("href");
  //   console.log("First href link", firstHrefLink);
  // } else {
  //   console.log("No links found");
  // }

  // forEach((item) => item.getAttribute("href"));

  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });

  // const result = page.url();

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

scrapeWebsiteURL("https://www.instagram.com/shardlowstjamesfc/?hl=pa");
