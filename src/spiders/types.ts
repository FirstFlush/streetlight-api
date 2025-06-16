
export interface Spider<T> {
  scrape(): Promise<T>;
  key: string;
}

export interface Pipeline<T> {
  validate(data: unknown): T;
  save(data: T): Promise<void>;
}
