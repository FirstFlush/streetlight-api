import { Module } from '@nestjs/common';
import { BC211Module } from './bc211/bc211.module';
import { JobRunnerService } from './job-runner/job-runner.service';

@Module({
  imports: [BC211Module],
  exports: [BC211Module],
  providers: [JobRunnerService],
})

export class SpidersModule {}
