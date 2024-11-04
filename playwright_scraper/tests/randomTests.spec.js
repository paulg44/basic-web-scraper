import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.instagram.com/shardlowstjamesfc");

  await page.getByRole("button", { name: /allow all cookies/i }).click();

  await page.waitForTimeout(5000);

  expect(page.getByRole("img", { name: /shardlowstjamesfc/i })).toBeVisible;
});
