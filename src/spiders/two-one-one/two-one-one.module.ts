import { Module } from '@nestjs/common';
import { TwoOneOneHomelessSearchSpider } from './homeless-search-spider';
import { NetworkModule } from '@/network/network.module';
import { ScrapingModule } from '@/scraping/scraping.module';
import { PdfShelterSpider } from './pdf-shelter-spider';

@Module({
    imports: [NetworkModule, ScrapingModule],
    providers: [TwoOneOneHomelessSearchSpider, PdfShelterSpider],
    exports: [TwoOneOneHomelessSearchSpider, PdfShelterSpider],
})
export class TwoOneOneModule {}
