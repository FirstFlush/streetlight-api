import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapingModule } from './scraping/scraping.module';
import { NetworkModule } from './network/network.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoConfig } from './config/logger.config';

@Module({
  imports: [ScrapingModule, NetworkModule, LoggerModule.forRoot(pinoConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
