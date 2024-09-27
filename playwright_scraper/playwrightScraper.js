const playwright = require("playwright");

async function scrapeWebsiteURL(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  // const container = page.locator("_ac7v xras4av xgc1b0m xat24cr xzboxd6");
  // const link = page.getByRole("link");

  // await page.click(link);

  const result = page.url();

  console.log(result);

  await browser.close();
  return result;
}

scrapeWebsiteURL("https://www.instagram.com/p/C__B59Vgd0T/?hl=pa")
  .then((data) => {
    const substringFromURL = data.substring(data.length - 17);
    const urlResult = substringFromURL.substring(0, 11);
    console.log(urlResult, data);

    const variableText = document.createElement("p");
    variableText.innerHTML = "testing";
    document.body.appendChild(variableText);
  })
  .catch((e) => {
    console.error(e);
  });
