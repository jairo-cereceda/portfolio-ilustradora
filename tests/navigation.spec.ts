import { test, expect } from '@playwright/test';

test('la navegación principal funciona', async ({ page }) => {
  await page.goto('/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Portfolio' })
    .click();

  await expect(page).toHaveURL(/portfolio/);

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Sobre mí' })
    .click();

  await expect(page).toHaveURL(/about-me/);

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Encargos' })
    .click();

  await expect(page).toHaveURL(/work-with-me/);
});
