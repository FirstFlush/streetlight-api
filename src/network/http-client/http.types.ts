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

