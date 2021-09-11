import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import picket from '../models/Picket';
import picketView from '../views/picketView';

export default {

  async index( req: Request, res: Response ) 
  {
      const farmsRepository = getRepository( picket );
      const farms = await farmsRepository.find({ 
        
      });

      return res.json( picketView.renderMany( farms ) );
  },

  async create( req: Request, res: Response )
  {
      const farmsRepository = getRepository( picket );

      req.body.name = req.body.data._parts[0][1];
      req.body.countFood = req.body.data._parts[1][1];
      req.body.type = req.body.data._parts[2][1];
      req.body.size = req.body.data._parts[3][1];
      req.body.latitude = req.body.data._parts[4][1];
      req.body.longitude = req.body.data._parts[5][1];
      req.body.status = req.body.data._parts[6][1];

      const schema = Yup.object().shape({
        name: Yup.string().required().min(5),
        countFood: Yup.string().required(),
        type: Yup.string().required(),
        size: Yup.number().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),  
        status: Yup.number().required(),
      });
      
      await schema.validate(
        { ...req.body },
        { abortEarly: false }
      );

      const farms = farmsRepository.create({
        ...req.body
      });

      await farmsRepository.save( farms );
      return res.status(201).json( farms );

  },

};
