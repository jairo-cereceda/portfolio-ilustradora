import { test, expect } from '@playwright/test';

test('About page loads correctly', async ({ page }) => {
  await page.goto('/about-me');

  await expect(page).toHaveURL(/about-me/);

  await expect(
    page.getByRole('heading', {
      name: /Sobre mí/i,
    })
  ).toBeVisible();
});
