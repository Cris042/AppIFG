import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FarmsController from './controllers/FarmsController';
import CatteController from './controllers/CattleController';

const routes = Router();
const upload = multer( uploadConfig );

routes.get('/picket', FarmsController.index );

routes.get('/types', FarmsController.listType );

routes.get('/cattle', CatteController.index );

routes.post('/farms', async( req, res ) => {
    await FarmsController.create( req, res );
});

routes.post('/cattle', async( req, res ) => {
    await CatteController.create( req, res );
});

routes.get('/breed', CatteController.listBreed);

routes.get('/farms/:id', FarmsController.show );

routes.post('/pickedUsed', async( req, res ) => { 
    await FarmsController.createPickedUserd( req, res ); 
});

export default routes;
