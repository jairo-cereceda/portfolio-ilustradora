import { test, expect } from '@playwright/test';

test('Home page loads correctly', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    /Ilustradora | Ilustradora estilo Anime y Videojuegos/i
  );

  await expect(page.getByRole('heading', { name: /Nombre/i })).toBeVisible();

  await page.waitForLoadState('networkidle');

  const images = page.getByTestId('picture-list').locator('img');
  await expect(images.first()).toBeVisible();
});
