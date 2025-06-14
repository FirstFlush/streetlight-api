import { Module } from '@nestjs/common';
import { ChromiumService } from './chromium/chromium.service';
import { DomService } from './dom/dom.service';

@Module({
  providers: [ChromiumService, DomService],
  exports: [ChromiumService, DomService],
})
export class BrowserModule {}
