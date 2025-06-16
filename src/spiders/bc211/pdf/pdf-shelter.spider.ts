import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";
import { spiderRegistry } from "@/spiders/registry";
import { Spider } from "@/spiders/types";
import { PinoLogger, InjectPinoLogger } from "nestjs-pino";
import { SpiderNetworkError } from "@/spiders/exc";

@Injectable()
export class BC211PdfSpider implements Spider<Uint8Array> {
    constructor(
        private readonly http: HttpClientService,
        @InjectPinoLogger(BC211PdfSpider.name)
        private readonly logger: PinoLogger,
    ) {}

    key = spiderRegistry.bc211.pdf.key

    async scrape(): Promise<Uint8Array> {
        const pdf = await this.fetchPdfData()
        if (pdf) {
            this.logger.debug("PDF homeless shelter data fetched successfully from BC211")
            return pdf
        }
        const msg = `Error fetching resource at ${spiderRegistry.bc211.pdf.url}`
        this.logger.error(msg)
        throw new SpiderNetworkError(msg)
    }

    async fetchPdfData(): Promise<Uint8Array> {
        return this.http.get(spiderRegistry.bc211.pdf.url, {
            responseType: "arraybuffer"
        })
    }


}
