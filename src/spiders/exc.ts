
export class SpiderException extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message, cause ? { cause } : undefined);
    this.name = 'SpiderException';
  }
}


export class SpiderParseError extends SpiderException {
  constructor(message = "Spider failed to parse content") {
    super(message);
    this.name = "SpiderParseError";
  }
}


export class SpiderNetworkError extends SpiderException {
  constructor(message = 'Error fetching network resource') {
    super(message);
    this.name = 'SpiderNetworkException';
  }
}


export class NinjaCrawlNetworkError extends SpiderException {
  constructor(message = 'Error reaching the Ninja Crawl scraping API') {
    super(message);
    this.name = 'NinjaCrawlNetworkError';
  }
}