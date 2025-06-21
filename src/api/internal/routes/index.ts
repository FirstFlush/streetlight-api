import { Router } from 'express';
import scrapingRoutes from './scraping';

const routerInternal = Router();

routerInternal.use('/scraping', scrapingRoutes);

export default routerInternal;
