import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";
import { ScrapeEndpoints } from "@/spiders/endpoints.constants";

@Injectable()
export class BC211PdfSpider {
    constructor(
        private readonly http: HttpClientService,
    ) {}


    async fetchPdfData(): Promise<Buffer> {
        return this.http.get(ScrapeEndpoints.bc211.pdf, {
            responseType: "arraybuffer"
        })
    }


}
