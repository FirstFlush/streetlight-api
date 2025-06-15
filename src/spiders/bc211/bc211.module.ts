import { Module } from '@nestjs/common';
import { BC211SearchSpider } from './search/search-results.spider';
import { NetworkModule } from '@/network/network.module';
import { BrowserModule } from '@/browser/browser.module';
import { BC211PdfSpider } from './pdf/pdf-shelter.spider';
import { BC211SearchPipeline } from './search/search-results.pipeline';

@Module({
    imports: [NetworkModule, BrowserModule],
    providers: [BC211SearchSpider, BC211PdfSpider, BC211SearchPipeline],
    exports: [BC211SearchSpider, BC211PdfSpider, BC211SearchPipeline],
})
export class BC211Module {}
