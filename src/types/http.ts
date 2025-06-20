interface RequestOptions {
    headers?: Record<string, string>;
    timeout?: number;   // milliseconds
    responseType?: 'json' | 'text' | 'arraybuffer'; 
}

export interface GetRequestOptions extends RequestOptions {
    params?: Record<string, string | number | boolean>;
}

export interface PostRequestOptions<T = unknown> extends RequestOptions {
    data?: T
}

export interface NinjaCrawlRequestData {
    spider_key: string
    raw_data: Uint8Array | string | object
    metadata?: Record<string, any>
}

export interface NinjaCrawlRequestOptions extends Omit<RequestOptions, "responseType"> {
    data: NinjaCrawlRequestData
    responseType: "json"
}

export interface NinjaCrawlResponse {
    success: boolean
    spider_key: string
    data?: Record<string, any>
    error?: string
    elapsed_ms?: number
}

