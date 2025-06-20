import { StreetlightError } from "./base";

export class HttpRequestException extends StreetlightError {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message, cause ? { cause } : undefined);
    this.name = 'HttpRequestException';
  }
}

export class NinjaCrawlNetworkError extends HttpRequestException {
  constructor(message = 'Error reaching the Ninja Crawl scraping API') {
    super(message);
    this.name = 'NinjaCrawlNetworkError';
  }
}