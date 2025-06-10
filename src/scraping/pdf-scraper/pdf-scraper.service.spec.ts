import { Test, TestingModule } from '@nestjs/testing';
import { PdfScraperService } from './pdf-scraper.service';

describe('PdfScraperService', () => {
  let service: PdfScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfScraperService],
    }).compile();

    service = module.get<PdfScraperService>(PdfScraperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
