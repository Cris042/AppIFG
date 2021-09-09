import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FarmsController from './controllers/FarmsController';

const routes = Router();
const upload = multer( uploadConfig );

routes.post('/orphanages', FarmsController.create);
routes.get('/picket', FarmsController.index);

export default routes;
