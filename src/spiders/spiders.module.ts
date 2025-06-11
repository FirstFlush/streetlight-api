import { Module } from '@nestjs/common';
import { TwoOneOneModule } from './two-one-one/two-one-one.module';

@Module({
  imports: [TwoOneOneModule],
  exports: [TwoOneOneModule],
})
export class SpidersModule {}
