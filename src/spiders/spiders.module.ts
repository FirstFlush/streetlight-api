import { Module } from '@nestjs/common';
import { TwoOneOneModule } from './bc211/bc211.module';

@Module({
  imports: [TwoOneOneModule],
  exports: [TwoOneOneModule],
})
export class SpidersModule {}
