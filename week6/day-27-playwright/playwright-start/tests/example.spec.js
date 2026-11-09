// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  const expectedTitle = testInfo.project.name === 'firefox' ? /Playwright/;

  await expect(page).toHaveTitle(expectedTitle);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
