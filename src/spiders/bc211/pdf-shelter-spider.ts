import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";


@Injectable()
export class PdfShelterSpider {
    constructor(
        private readonly http: HttpClientService,
    ) {}

    private readonly PDF_URL = "https://shelters.bc211.ca/bc211shelters"

    async fetchPdfData(): Promise<Buffer> {
        return this.http.get(this.PDF_URL, {
            responseType: "arraybuffer"
        })
    }


}
