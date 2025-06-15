import { Injectable } from "@nestjs/common";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";


@Injectable()
export class BC211SearchPipeline {
    constructor(
        @InjectPinoLogger(BC211SearchPipeline.name)
        private readonly logger: PinoLogger,
    ) {}

    validate() {
        this.logger.info("in validate function")
    }

    async save() {
        this.logger.info("in save function")
    }
}