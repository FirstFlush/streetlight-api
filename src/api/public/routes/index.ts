import { Router } from 'express';

const routerPublic = Router();

routerPublic.get('/ping', (req, res) => {
    res.json({ping:"PONG"})
});
// internalRouter.use('/scraping', scrapingRoutes);

export default routerPublic;
