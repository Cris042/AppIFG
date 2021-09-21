import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Cattle from '../models/Cattle';
import CattleView from '../views/CattleView';

export default {

  async index( req: Request, res: Response ) 
  {   
      const cattleRepository = getRepository( Cattle );
      const cattle = await cattleRepository.find({ });

      return res.json( CattleView.renderMany( cattle ) );
  },

  async show( req: Request, res: Response)
  {
      return res.json( );
  },

  async create( req: Request, res: Response )
  {     
      console.log( req.body.data._parts );
  },

};
