

import { HttpClientService } from "@/network/http-client/http-client.service";
import { Spider, Pipeline } from "./types";
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { NinjaCrawlNetworkError } from "./exc";
import { NinjaCrawlResponse } from "@/network/http-client/types";

export class SpiderJobRunner {
  constructor(
    private readonly spider: Spider<string | object | Uint8Array>,
    private readonly pipeline: Pipeline<any>,
    private readonly http: HttpClientService,
    @InjectPinoLogger(SpiderJobRunner.name) private readonly logger: PinoLogger,
  ) {}

  async run(): Promise<void> {
    let rawData = await this.spider.scrape();
    if (rawData instanceof Uint8Array) {
      rawData = Buffer.from(rawData).toString('base64');
    }
    const normalized = await this.normalizeData(rawData)
    const validated = this.pipeline.validate(normalized);
    await this.pipeline.save(validated);
  }

  async normalizeData(rawData: string | object): Promise<NinjaCrawlResponse> {
    try {
      return await this.http.ninjaCrawl({
        responseType: "json",
        data: {
          raw_data: rawData,
          spider_key: this.spider.key,
        },
      });
    } catch (err) {
      const msg = "Network error on request to Ninja Crawl"
      this.logger.error(`${msg}: ${err}`)
      throw new NinjaCrawlNetworkError(msg)
    }
  }
}