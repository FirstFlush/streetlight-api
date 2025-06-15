export interface Spider<T> {
  scrape(): Promise<T>;
  getKey(): string;
}

export interface Pipeline<T> {
  validate(data: unknown): T;
  save(data: T): Promise<void>;
}
