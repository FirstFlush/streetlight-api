import { chromium, Browser, Page, BrowserContext } from 'playwright-chromium';
import logger from '../../config/logger';

export class PlaywrightService {

    private browser: Browser | null = null;

    async getBrowser(): Promise<Browser> {
        if (!this.browser) {
            this.browser = await chromium.launch({
                headless: true,
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
            });
            logger.debug("Launched Chromium browser")
        }
        return this.browser
    }

    async newContext(): Promise<BrowserContext> {
        const browser = await this.getBrowser()
        return await browser.newContext()
    }

    async newPage(context?: BrowserContext): Promise<Page> {
        if (!context) {
            const browser = await this.getBrowser()
            context = await browser.newContext()
        }
        return await context.newPage()
    }

    async closePage(page: Page) {
        await page.close()
    }

    async closeContext(context: BrowserContext) {
        await context.close()
    }

    async shutdown() {
        if (this.browser) await this.browser.close()
        logger.debug("Chromium browser shut down")
    }
}
