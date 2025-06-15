import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkModule } from './network/network.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoConfig } from './config/logger.config';
import { SpidersModule } from './spiders/spiders.module';
import { TestSpiderController } from './dev/dev.controller';
import { BrowserModule } from './browser/browser.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    LoggerModule.forRoot(pinoConfig),
    NetworkModule,  
    SpidersModule, 
    BrowserModule
  ],
  controllers: [AppController, TestSpiderController],
  providers: [AppService],
})
export class AppModule {}
