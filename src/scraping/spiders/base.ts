import logger from '@/config/logger';
import { Spider } from '@/types/spiders';
import type { Logger } from 'pino';


export abstract class BaseSpider<T> implements Spider<T> {

    public log!: Logger
    public abstract readonly key: string

    setLogger(log: Logger): void {
        this.log = log;
    }

    abstract scrape(): Promise<T>;
}
