import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";
import { spiderRegistry } from "@/spiders/registry";

@Injectable()
export class BC211PdfSpider {
    constructor(
        private readonly http: HttpClientService,
    ) {}


    async fetchPdfData(): Promise<Buffer> {
        return this.http.get(spiderRegistry.bc211.pdf.url, {
            responseType: "arraybuffer"
        })
    }


}
