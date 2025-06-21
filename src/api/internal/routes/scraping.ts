import { Router } from 'express';
import { devEndpoint } from '../controllers/scraping'

const scrapingRoutes = Router();

scrapingRoutes.get('/dev', devEndpoint);

export default scrapingRoutes;
