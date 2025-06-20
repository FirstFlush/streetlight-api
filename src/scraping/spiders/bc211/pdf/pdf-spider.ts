import { HttpClientService } from "@/scraping/services/http-service";
import { spiderRegistry } from "@/config/spider-registry";
import { BaseSpider } from "../../base";
import { SpiderNetworkError } from "@/error/spiders";


export class BC211PdfSpider extends BaseSpider<Uint8Array> {

    constructor(
        private readonly http: HttpClientService,
    ) {super()}

    key = spiderRegistry.bc211.pdf.key

    async scrape(): Promise<Uint8Array> {
        const pdf = await this.fetchPdfData()
        if (pdf) {
            this.log.debug("PDF homeless shelter data fetched successfully from BC211")
            return pdf
        }
        const msg = `Error fetching resource at ${spiderRegistry.bc211.pdf.url}`
        this.log.error(msg)
        throw new SpiderNetworkError(msg)
    }

    async fetchPdfData(): Promise<Uint8Array> {
        return this.http.get(spiderRegistry.bc211.pdf.url, {
            responseType: "arraybuffer"
        })
    }
}
