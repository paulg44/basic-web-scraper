import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.instagram.com/shardlowstjamesfc");

  await page.getByRole("button", { name: /allow all cookies/i }).click();

  // await page.getByRole("textbox", { name: /phone number/i }).fill("");

  // await page.getByRole("textbox", { name: /password/i }).fill("");

  // await page.getByRole("button", { name: /Log in/ }).click();

  // await page.getByRole("link", { name: /instagram/i }).click();

  expect(page.getByRole("img", { name: /shardlowstjamesfc/i })).toBeVisible;
});
