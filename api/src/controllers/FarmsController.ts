import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import picket from '../models/Picket';
import picketView from '../views/picketView';

export default {

  async index( req: Request, res: Response ) 
  {
    const orphanagesRepository = getRepository( picket );
    const orphanages = await orphanagesRepository.find({
      
    });

    return res.json( picketView.renderMany( orphanages ) );
  },

  async create( req: Request, res: Response ) 
  {
    const orphanagesRepository = getRepository( picket );

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      countFood: Yup.string().required(),
      type: Yup.string().required(),
      size: Yup.number().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      status: Yup.number().required(),
    });
    
    // await schema.validate(
    //   { ...req.body },
    // );

    req.body.name = "test";
    req.body.countFood = "0";
    req.body.type = "test";
    req.body.size = 123;
    req.body.latitude = -16.81508090497519;
    req.body.longitude = -48.02909970297907;
    req.body.status = 0;

    const data = orphanagesRepository.create({
       ...req.body
    });

    await orphanagesRepository.save( data );
    return res.status(201).json( data );
  },

};
