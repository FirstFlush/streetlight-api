import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";

@Injectable()
export class TwoOneOneHomelessSearchSpider {
    constructor(
        private readonly http: HttpClientService,
    ) {}

    async scrapeHomelessnessResults(): Promise<unknown> {
        return this.http.get("https://streetninja.ca", {})
    }


}
