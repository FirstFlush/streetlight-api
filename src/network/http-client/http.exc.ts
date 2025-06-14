
export class HttpRequestException extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message, cause ? { cause } : undefined);
    this.name = 'HttpRequestException';
  }
}