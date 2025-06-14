import { Module } from '@nestjs/common';
import { BC211Module } from './bc211/bc211.module';

@Module({
  imports: [BC211Module],
  exports: [BC211Module],
})

export class SpidersModule {}
