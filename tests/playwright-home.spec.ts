import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywirghtHomePage';

test('Verify that the "Get started" link navigates to the correct page', async ({ page }) => {
    const homePage = new PlaywrightHomePage(page);

    await homePage.goto();
    await homePage.clickGetStarted();

    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});