import { Module } from '@nestjs/common';
import { BC211SearchSpider } from './search/search-results.spider';
import { NetworkModule } from '@/network/network.module';
import { BrowserModule } from '@/browser/browser.module';
import { BC211PdfSpider } from './pdf/pdf-shelter.spider';
import { BC211SearchPipeline } from './search/search-results.pipeline';
import { BC211PdfShelterPipeline } from './pdf/pdf-shelter-pipeline';

@Module({
    imports: [NetworkModule, BrowserModule],
    providers: [BC211SearchSpider, BC211PdfSpider, BC211SearchPipeline, BC211PdfShelterPipeline],
    exports: [BC211SearchSpider, BC211PdfSpider, BC211SearchPipeline, BC211PdfShelterPipeline],
})
export class BC211Module {}
