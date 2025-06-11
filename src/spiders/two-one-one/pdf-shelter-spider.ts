import { Injectable } from "@nestjs/common";
import { HttpClientService } from "@/network/http-client/http-client.service";
import { PdfScraperService } from "@/scraping/pdf-scraper/pdf-scraper.service";


@Injectable()
export class PdfShelterSpider {
    constructor(
        private readonly http: HttpClientService,
        private readonly pdf: PdfScraperService,
    ) {}

    private readonly PDF_URL = "https://shelters.bc211.ca/bc211shelters"


    async parsePdf() {
        const response = await this.fetchPdfData();
        const data = await this.pdf.extractStructure(response)
        const rows = this.pdf.extractTableMatrixFromPdfPage(data.Pages[0])
        console.log(rows[0])
        console.log('-------------------------')
        console.log(rows[1])
        console.log('-------------------------')
        console.log(rows[2])
        console.log('-------------------------')
        console.log(rows[3])
        console.log('-------------------------')
        console.log(rows[4])
        console.log('-------------------------')
        console.log(rows[5])
        console.log('-------------------------')
        console.log(rows[6])
        console.log('-------------------------')
        console.log(rows[7])
        console.log('-------------------------')
        console.log(rows[8])
        console.log('-------------------------')
        console.log(rows[9])
        console.log('-------------------------')
        console.log(rows[10])
        console.log('-------------------------')
        console.log(rows[11])
        console.log('-------------------------')
        console.log(rows[12])
    }

    async fetchPdfData(): Promise<Buffer> {
        return this.http.get(this.PDF_URL, {
            responseType: "arraybuffer"
        })
    }


}
