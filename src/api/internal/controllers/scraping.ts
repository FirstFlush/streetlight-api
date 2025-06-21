import { Request, Response } from 'express';
import { SpiderJobRunner } from '@/scraping/services/job-runner-service';
import { BC211PdfSpider } from '@/scraping/spiders/bc211/pdf/pdf-spider';
import { BC211PdfPipeline } from '@/scraping/spiders/bc211/pdf/pdf-pipeline';
import { HttpClientService } from '@/scraping/services/http-service';


export const devEndpoint = async (req: Request, res: Response) => {

    const httpService = new HttpClientService()
    const spider = new BC211PdfSpider(httpService)
    const pipeline = new BC211PdfPipeline()

    const runner = new SpiderJobRunner(spider, pipeline, httpService);
    await runner.run();
    res.json({ ok:"ok" })};