import { Logger } from "pino";

export interface Spider<T> {
  scrape(): Promise<T>;
  key: string;
  setLogger(logger: Logger): void;
}

export interface Pipeline<T> {
  validate(data: unknown): T;
  save(data: T): Promise<void>;
}
