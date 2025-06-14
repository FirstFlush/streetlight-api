import { Controller, Get } from '@nestjs/common';
import { BC211PdfSpider } from '@/spiders/bc211/pdf/pdf-shelter.spider';



@Controller('ping')
export class DevController {

    constructor(private readonly spider: BC211PdfSpider) {}

    @Get()
    async run(): Promise<Buffer> {
    // async run(): Promise<Record<string, string>> {

        // return {"ping":"PONG"}

        return await this.spider.fetchPdfData();
    }
}
