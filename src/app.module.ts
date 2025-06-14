import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkModule } from './network/network.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoConfig } from './config/logger.config';
import { SpidersModule } from './spiders/spiders.module';
import { DevController } from './dev/dev.controller';
import { BrowserModule } from './browser/browser.module';

@Module({
  imports: [NetworkModule, LoggerModule.forRoot(pinoConfig), SpidersModule, BrowserModule],
  controllers: [AppController, DevController],
  providers: [AppService],
})
export class AppModule {}
