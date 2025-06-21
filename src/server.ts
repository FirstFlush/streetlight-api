import express from 'express';
import logger from './config/logger';
import routerInternal from './api/internal/routes'; 
import routerPublic from './api/public/routes';

const app = express();
app.use(express.json());

app.use('/internal', routerInternal);
app.use('/api', routerPublic);

app.get('/', (_req, res) => {
  res.send('Streetlight API is live');
});

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  logger.info(`Server listening on http://${HOST}:${PORT}`);
});
