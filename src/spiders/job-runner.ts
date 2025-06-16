

import { HttpClientService } from "@/network/http-client/http-client.service";
import { Spider, Pipeline } from "./types";

export class SpiderJobRunner {
  constructor(
    private readonly spider: Spider<string | object | Uint8Array>,
    private readonly pipeline: Pipeline<any>,
    private readonly http: HttpClientService,
  ) {}

  async run(): Promise<void> {
    let rawData = await this.spider.scrape();
    if (rawData instanceof Uint8Array) {
      rawData = Buffer.from(rawData).toString('base64');
    }
    const normalized = await this.http.ninjaCrawl({
      responseType: "json",
      data: {
        raw_data: rawData,
        spider_key: this.spider.key,
      },
    });
    const validated = this.pipeline.validate(normalized);
    await this.pipeline.save(validated);
  }
}
