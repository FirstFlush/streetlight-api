import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";
import { ChromiumService } from "@/browser/chromium/chromium.service";
import { DomService } from "@/browser/dom/dom.service";
import { ScrapeEndpoints } from "../../endpoints.constants";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";
import { Page } from "playwright-core";

@Injectable()
export class BC211SearchSpider {
    constructor(
        private readonly chromium: ChromiumService,
        private readonly dom: DomService,
        @InjectPinoLogger(BC211SearchSpider.name)
        private readonly logger: PinoLogger,
    ) {}
    
    async scrapeSearchResults(): Promise<unknown> {
        const browser = await this.chromium.getBrowser()
        const page = await this.chromium.newPage()
        const response = await page.goto(ScrapeEndpoints.bc211.searchResults)
        if (!response?.ok) {

        }

        return await ""
    }



    async searchResults(page: Page): Promise<string[]> {
        await page.waitForFunction(() => !!(window as any)["searchResults"])
        return [""]
    }

}
