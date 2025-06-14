import { Test, TestingModule } from '@nestjs/testing';
import { ChromiumService } from './chromium.service';

describe('ChromiumService', () => {
  let service: ChromiumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChromiumService],
    }).compile();

    service = module.get<ChromiumService>(ChromiumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
