import { Injectable } from "@nestjs/common";
import { ChromiumService } from "@/browser/chromium/chromium.service";
import { spiderRegistry } from "../../registry";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";
import { Page } from "playwright-core";
import { BC211SearchResult, BC211SearchResultRaw } from "./types";
import { SpiderParseError, SpiderTimeoutException } from "@/spiders/spiders.exc";


@Injectable()
export class BC211SearchSpider {
    constructor(
        private readonly chromium: ChromiumService,
        @InjectPinoLogger(BC211SearchSpider.name)
        private readonly logger: PinoLogger,
    ) {}

    getKey(): string {
        return spiderRegistry.bc211.searchResults.key
    }

    async scrape(): Promise<BC211SearchResult[]> {
        const page = await this.chromium.newPage()
        const response = await page.goto(spiderRegistry.bc211.searchResults.url)
        if (response?.ok) {
            return await this.getResults(page)
        }
        const msg = `Request timeout for endpoint ${spiderRegistry.bc211.searchResults.url}`
        this.logger.error(msg)
        throw new SpiderTimeoutException(msg)
    }

    async getResults(page: Page): Promise<BC211SearchResult[]> {
        const results = await this.fetchRawResults(page)
        if (results) {
            return this.trimResults(results)
        }
        const msg = "No results found!"
        this.logger.error(msg)
        throw new SpiderParseError(msg)
    }

    private trimResults(rawResults: any[]): BC211SearchResult[] {
        return rawResults.map((result) => ({
            type: result.type,
            name_primary: result.name_primary,
            description: result.description,
            last_verified_on: result.last_verified_on,
            lastVerifiedOn: result.lastVerifiedOn,
            contactDetails: (result.contactDetails || []).map((d: any) => d.contact),
        }));
    }

    private async fetchRawResults(page: Page): Promise<BC211SearchResultRaw[]> {
        await page.waitForFunction(() => !!(window as any)["searchResults"])
        return await page.evaluate(() => (window as any)["searchResults"]);
    }

}
