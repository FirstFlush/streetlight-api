import { PlaywrightService } from "@/scraping/services/playwright-service";
import { spiderRegistry } from "@/config/spider-registry";
import { Page } from "playwright-core";
import { BC211SearchResult, BC211SearchResultRaw } from '../types'
import { SpiderParseError, SpiderNetworkError } from "@/error/spiders";

import { BaseSpider } from "../../base";

export class BC211SearchSpider extends BaseSpider<BC211SearchResult[]> {

    public readonly key = spiderRegistry.bc211.searchResults.key

    constructor(
        private readonly playwright: PlaywrightService,
    ) {super()}


    async scrape(): Promise<BC211SearchResult[]> {
        const page = await this.playwright.newPage()
        const response = await page.goto(spiderRegistry.bc211.searchResults.url)
        if (response?.ok) {
            return await this.getResults(page)
        }
        const msg = `Status code ${response?.status}. Could not get resource at ${spiderRegistry.bc211.searchResults.url}`
        this.log.error(msg)
        throw new SpiderNetworkError(msg)
    }

    async getResults(page: Page): Promise<BC211SearchResult[]> {
        const results = await this.fetchRawResults(page)
        if (results) {
            return this.trimResults(results)
        }
        const msg = "No results found!"
        this.log.error(msg)
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
