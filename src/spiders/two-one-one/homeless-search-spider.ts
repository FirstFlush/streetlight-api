import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";
import { WebScraperService } from "@/scraping/web-scraper/web-scraper.service";

@Injectable()
export class TwoOneOneHomelessSearchSpider {
    constructor(
        private readonly http: HttpClientService,
        private readonly html: WebScraperService,
    ) {}

    async scrapeHomelessnessResults(): Promise<unknown> {
        return this.http.get("https://streetninja.ca", {})
    }


}
