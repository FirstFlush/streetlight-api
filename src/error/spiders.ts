import { StreetlightError } from "./base";


export class SpiderException extends StreetlightError {
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
