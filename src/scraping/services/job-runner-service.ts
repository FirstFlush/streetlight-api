import logger from "@/config/logger";
import { Logger } from "pino";
import { HttpClientService } from "@/scraping/services/http-service";
import { Spider, Pipeline } from "@/types/spiders";
import { NinjaCrawlNetworkError } from "@/error/network";
import { NinjaCrawlResponse } from "@/types/http";

export class SpiderJobRunner {

  private readonly log: Logger;
  private readonly jobId: string;
  
  constructor(
    private readonly spider: Spider<string | object | Uint8Array>,
    private readonly pipeline: Pipeline<any>,
    private readonly http: HttpClientService,
  ) {
    this.jobId = this.generateJobId()
    this.log = logger.child({
        spider: spider.key,
        jobId: this.jobId,
    })
    this.spider.setLogger(this.log)
    this.log.debug(`Starting job ID ${this.jobId}`)
  }

  generateJobId(): string {
    const suffix = Math.floor(Math.random() * 1000000);
    return `${this.spider.key}-${suffix}`
  }

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
      this.log.error(`${msg}: ${err}`)
      throw new NinjaCrawlNetworkError(msg)
    }
  }
}