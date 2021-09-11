import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FarmsController from './controllers/FarmsController';

const routes = Router();
const upload = multer( uploadConfig );

routes.get('/picket', FarmsController.index );

routes.post('/orphanages', async ( req, res ) => {
    await FarmsController.create( req, res );
});

export default routes;
