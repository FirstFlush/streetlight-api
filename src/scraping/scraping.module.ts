import { Module } from '@nestjs/common';
import { WebScraperService } from './web-scraper/web-scraper.service';
import { PdfScraperService } from './pdf-scraper/pdf-scraper.service';
import { NetworkModule } from '@/network/network.module';


@Module({
  imports: [NetworkModule],
  providers: [WebScraperService, PdfScraperService],
  exports: [WebScraperService, PdfScraperService],
})
export class ScrapingModule {}
