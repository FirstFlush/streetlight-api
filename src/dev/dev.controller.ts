import { Controller, Get } from '@nestjs/common';
import { PdfShelterSpider } from '@/spiders/two-one-one/pdf-shelter-spider';

@Controller('ping')
export class DevController {

    constructor(private readonly spider: PdfShelterSpider) {}

    @Get()
    async run(): Promise<any> {
    // async run(): Promise<Record<string, string>> {

        // return {"ping":"PONG"}

        return this.spider.parsePdf();
    }
}
