

import { HttpClientService } from "@/network/http-client/http-client.service";
import { Spider, Pipeline } from "./spiders.types";


export class SpiderJobRunner<RawData extends string | object | Uint8Array, NormalizedData> {
  constructor(
    private readonly spider: Spider<RawData>,
    private readonly pipeline: Pipeline<NormalizedData>,
    private readonly http: HttpClientService,
) {}

  async run(): Promise<void> {
    const rawData = await this.spider.scrape();
    const normalized = await this.http.ninjaCrawl({
      responseType: "json",
      data: {
        raw_data: rawData,
        spider_key: this.spider.getKey(),
      },
    });
    const validated = this.pipeline.validate(normalized);
    await this.pipeline.save(validated);
  }
}


