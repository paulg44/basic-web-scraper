import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.instagram.com/shardlowstjamesfc");

  await page.getByRole("button", { name: /allow all cookies/i }).click();

  await page.getAttribute("href");

  // await page
  //   .getByRole("textbox", { name: /password/i })
  //   .fill("zKkpb,&6E6a.uNi");

  // await page.getByRole("button", { name: /log in/ }).click();
});
