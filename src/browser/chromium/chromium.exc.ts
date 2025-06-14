
export class ChromiumServiceError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message, cause ? { cause } : undefined);
    this.name = 'ChromiumServiceError';
  }
}
