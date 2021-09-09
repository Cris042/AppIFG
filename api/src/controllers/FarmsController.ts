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

      // req.body.name = "test1";
      // req.body.countFood = "0";
      // req.body.type = "test";
      // req.body.size = 123;
      // req.body.latitude = -16.91508090497519;
      // req.body.longitude = -48.02909970297907;
      // req.body.status = 0;

      // const schema = Yup.object().shape({
      //   name: Yup.string().required().min(5),
      //   countFood: Yup.string().required(),
      //   type: Yup.string().required(),
      //   size: Yup.number().required(),
      //   latitude: Yup.number().required(),
      //   longitude: Yup.number().required(),  
      //   status: Yup.number().required(),
      // });
      
      // await schema.validate(
      //   { ...req.body },
      //   { abortEarly: false }
      // );

      const farms = farmsRepository.create({
        ...req.body
      });

      // await farmsRepository.save( farms );
      console.log( farms );
      return res.status(201).json( farms );

  },

};
