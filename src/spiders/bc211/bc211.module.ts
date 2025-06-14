import { Module } from '@nestjs/common';
import { BC211SearchSpider } from './search/search-results.spider';
import { NetworkModule } from '@/network/network.module';
import { BrowserModule } from '@/browser/browser.module';
import { BC211PdfSpider } from './pdf/pdf-shelter.spider';

@Module({
    imports: [NetworkModule, BrowserModule],
    providers: [BC211SearchSpider, BC211PdfSpider],
    exports: [BC211SearchSpider, BC211PdfSpider],
})
export class BC211Module {}
