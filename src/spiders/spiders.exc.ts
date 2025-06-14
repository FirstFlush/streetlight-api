
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


export class SpiderTimeoutException extends SpiderException {
  constructor(message = 'Spider timed out') {
    super(message);
    this.name = 'SpiderTimeoutException';
  }
}