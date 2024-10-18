import playwright from "playwright";
import fs from "fs-extra";

async function scrapeWebsiteURL(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  await page.getByRole("button", { name: /allow all cookies/i }).click();

  const mainSection = page.getByRole("main");
  await mainSection.waitFor();

  const hrefs = await page.evaluate(() => {
    const mainSection = document.querySelector("main");

    if (mainSection) {
      return Array.from(document.links).map((item) => item.href);
    }
    return [];
  });

  console.log(hrefs);

  fs.writeFileSync("instagram.json", JSON.stringify(hrefs));

  await browser.close();
}

scrapeWebsiteURL("https://www.instagram.com/shardlowstjamesfc");
