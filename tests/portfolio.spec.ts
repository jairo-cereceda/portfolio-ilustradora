import { test, expect } from '@playwright/test';

test("Portfolio's gallery loads", async ({ page }) => {
  await page.goto('/portfolio');

  await expect(page).toHaveURL(/portfolio/);

  await expect(
    page.getByRole('heading', {
      name: /Portfolio/i,
    })
  ).toBeVisible();

  await page.waitForLoadState('networkidle');

  const images = page.getByTestId('picture-list').locator('img');
  await expect(images.first()).toBeVisible();
});
