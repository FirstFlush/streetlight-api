import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { chromium, Browser, Page, BrowserContext } from 'playwright-chromium';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';


@Injectable()
export class ChromiumService implements OnModuleDestroy {

    private browser: Browser | null = null;

    constructor(@InjectPinoLogger(ChromiumService.name) private readonly logger: PinoLogger) {}

    async getBrowser(): Promise<Browser> {
        if (!this.browser) {
            this.browser = await chromium.launch({
                headless: true,
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
            });
            this.logger.debug("Launched Chromium browser")
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

    async onModuleDestroy() {
        if (this.browser) await this.browser.close()
        this.logger.debug("Chromium browser shut down")
    }
}
