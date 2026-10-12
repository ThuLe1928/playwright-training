import { type Page, type Locator } from '@playwright/test';

export class PlaywrightHomePage {
    private readonly page: Page;
    private readonly getStartedLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    }

     async goto() {
        await this.page.goto('https://playwright.dev/');
     }

     async clickGetStarted() {
        await this.getStartedLink.click();
     }
}