import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapingModule } from './scraping/scraping.module';
import { NetworkModule } from './network/network.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoConfig } from './config/logger.config';
import { SpidersModule } from './spiders/spiders.module';
import { DevController } from './dev/dev.controller';

@Module({
  imports: [ScrapingModule, NetworkModule, LoggerModule.forRoot(pinoConfig), SpidersModule],
  controllers: [AppController, DevController],
  providers: [AppService],
})
export class AppModule {}
