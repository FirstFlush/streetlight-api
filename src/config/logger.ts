import pino from 'pino';
import fs from 'fs';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const logDir = path.join('log');
fs.mkdirSync(logDir, { recursive: true });

const transport = pino.transport({
  targets: [
    {
      level: isProd ? 'info' : 'debug',
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      }
    },
    {
      level: 'error',
      target: 'pino/file',
      options: { destination: path.join(logDir, 'error.log') }
    }
  ]
});

const logger = pino({ level: 'debug' }, transport);

export default logger;
