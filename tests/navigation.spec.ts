import { test, expect } from '@playwright/test';

test.describe('Main Navigation', () => {
  test('should navigate between main sections on any screen size', async ({
    page,
  }) => {
    await page.goto('/');

    const mainNav = page.getByRole('navigation', {
      name: 'Navegación Principal',
    });
    const openMenuBtn = page.getByRole('button', {
      name: 'Abrir menú de navegación',
    });

    // Helper: opens the mobile menu first if the hamburger button is visible
    const navigateTo = async (linkText: string, targetUrl: RegExp) => {
      if (await openMenuBtn.isVisible()) {
        await openMenuBtn.click();
        await expect(mainNav).toBeVisible();
      }

      const link = mainNav.getByRole('link', { name: linkText, exact: true });
      await link.click();
      await expect(page).toHaveURL(targetUrl);
    };

    // 1. Go to Portfolio
    await navigateTo('Portfolio', /portfolio/);

    // 2. Go to Sobre mí
    await navigateTo('Sobre mí', /about-me/);

    // 3. Go to Encargos
    await navigateTo('Encargos', /work-with-me/);
  });

  test('should open and close the mobile navigation drawer correctly', async ({
    page,
    isMobile,
  }) => {
    // Only run this test on mobile viewports
    test.skip(!isMobile, 'Mobile-only test');

    await page.goto('/');

    const openMenuBtn = page.getByRole('button', {
      name: 'Abrir menú de navegación',
    });
    const closeMenuBtn = page.getByRole('button', {
      name: 'Cerrar menú de navegación',
    });
    const mainNavContainer = page.locator('#main-nav');

    // Menu is closed by default
    await expect(openMenuBtn).toHaveAttribute('aria-expanded', 'false');

    // 1. Open menu
    await openMenuBtn.click();
    await expect(openMenuBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(mainNavContainer).toHaveAttribute('aria-hidden', 'false');

    // 2. Close using the close button
    await closeMenuBtn.click();
    await expect(openMenuBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(mainNavContainer).toHaveAttribute('aria-hidden', 'true');

    // 3. Open and close using the Escape key
    await openMenuBtn.click();
    await expect(openMenuBtn).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(openMenuBtn).toHaveAttribute('aria-expanded', 'false');
  });
});
