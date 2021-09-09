import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FarmsController from './controllers/FarmsController';

const routes = Router();
const upload = multer( uploadConfig );

var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

routes.get('/picket', FarmsController.index );
routes.post('/orphanages', FarmsController.create);

export default routes;
