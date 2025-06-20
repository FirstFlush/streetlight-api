import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { GetRequestOptions, NinjaCrawlRequestOptions, NinjaCrawlResponse, PostRequestOptions } from '@/types/http';
import { HttpRequestException } from '@/error/network';
import logger from '@/config/logger';

export class HttpClientService {

    private readonly axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            timeout: 10000,
            validateStatus: () => true, // this lets me handle 4xx-5xx errors myself
        })
    }

    private async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.axios.request(config);
            if (response.status >= 200 && response.status < 300) {
                logger.debug(`HTTP status ${response.status} for url ${config.url}`)
            } else {
                logger.error(`HTTP status ${response.status} for url ${config.url}`)
            }

            const data = config.responseType === 'arraybuffer'
                ? (Buffer.from(response.data) as T)
                : (response.data as T);
            return data
        } catch (err) {
            let status: number | undefined
            if (axios.isAxiosError(err) && err.response) {
                status = err.response.status;
            }
            const msg = `HTTP ${config.method?.toUpperCase()} ${config.url} failed with status code ${status}! Error: ${(err as Error).message}`;
            logger.error(msg);
            throw new HttpRequestException(msg);        
        }
    }

    public async get<T = unknown>(url: string, options: GetRequestOptions): Promise<T> {
        const config: AxiosRequestConfig = {
            url,
            method: "GET",
            headers: options.headers,
            params: options.params,
            timeout: options.timeout,
            responseType: options.responseType,
        }
        return this.request<T>(config);
    }

    public async post<T = unknown>(url: string, options: PostRequestOptions): Promise<T> {
        const config: AxiosRequestConfig = {
            url,
            method: "POST",
            headers: options.headers,
            data: options.data,
            timeout: options.timeout,
            responseType: options.responseType,
        }
        return this.request<T>(config);
    }

    public async ninjaCrawl<NinjaCrawlResponse>(options: NinjaCrawlRequestOptions): Promise<NinjaCrawlResponse> {
        const config: AxiosRequestConfig = {
            url: process.env.NINJA_CRAWL_URL ?? "http://localhost:8000/scrape",
            method: "POST",
            data: options.data,
            headers: options.headers,
            timeout: options.timeout,
            responseType: options.responseType
        }
        return this.request<NinjaCrawlResponse>(config)
    }
}