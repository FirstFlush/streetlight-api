import { Controller, Get } from '@nestjs/common';
import { SpiderJobRunner } from '@/spiders/job-runner';
import { BC211SearchSpider } from '@/spiders/bc211/search/search-results.spider';
import { BC211SearchPipeline } from '@/spiders/bc211/search/search-results.pipeline';
import { HttpClientService } from '@/network/http-client/http-client.service';

@Controller('test')
export class TestSpiderController {
  constructor(
    private readonly spider: BC211SearchSpider,
    private readonly pipeline: BC211SearchPipeline,
    private readonly http: HttpClientService,
  ) {}

  @Get('run-spider')
  async runSpider(): Promise<string> {
    const runner = new SpiderJobRunner(this.spider, this.pipeline, this.http);
    await runner.run();
    return 'Spider run complete';
  }
}
