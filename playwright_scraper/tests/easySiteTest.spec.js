import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.ssjfc.co.uk");

  expect(page).toHaveTitle(/shardlow st james/i);
});

test("shop items display", async ({ page }) => {
  await page.goto("https://www.ssjfc.co.uk");

  await page.getByRole("link", { name: /shop/i }).click();

  const header = page.locator("h2");
  await expect(header).toBeVisible();

  await expect(header).toHaveText(/welcome/i);

  const shopItems = page.locator(".shopItem");
  await expect(shopItems.first()).toBeVisible();
});
