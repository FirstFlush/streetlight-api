export const pinoConfig = {
  pinoHttp: {
    transport: {
      target: 'pino-pretty', // human-readable output
      options: {
        singleLine: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    },
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  },
}