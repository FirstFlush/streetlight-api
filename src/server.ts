import express from 'express';
import logger from './config/logger';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Streetlight API is live');
});

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  logger.info(`Server listening on http://${HOST}:${PORT}`);
});
