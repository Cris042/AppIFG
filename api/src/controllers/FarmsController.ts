import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import picket from '../models/Picket';
import picketView from '../views/picketView';
import PastureType from '../models/PastureType';
import PastureTypeView from '../views/PastureTypeView';

export default {

  async index( req: Request, res: Response ) 
  {
      const farmsRepository = getRepository( picket );
      const farms = await farmsRepository.find({ });

      return res.json( picketView.renderMany( farms ) );
  },

  async listType( req: Request, res: Response ) 
  {
      const Type = getRepository( PastureType );
      const types = await Type.find({ });

      return res.json( PastureTypeView.renderMany( types ) );
  },

  async show( req: Request, res: Response)
  {
    const { id } = req.params;

    const picketRepository = getRepository( picket );

    const picketID = await picketRepository.findOneOrFail( id );

    return res.json( picketView.render(  picketID ) );
  },

  async create( req: Request, res: Response )
  {
      const farmsRepository = getRepository( picket );

      const name = req.body.data._parts[0][1],
      countFood = req.body.data._parts[1][1],
      type = req.body.data._parts[2][1],
      size = req.body.data._parts[3][1],
      latitude = req.body.data._parts[4][1],
      longitude = req.body.data._parts[5][1],
      status = req.body.data._parts[6][1] == 'true' ? 1 : 0;

      const schema = Yup.object().shape({
        name: Yup.string().required().min(3),
        countFood: Yup.number().required(),
        type: Yup.string().required(),
        size: Yup.number().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),  
        status: Yup.number().required(),
      });
    
      try 
      {
        await schema.validate(
          { name, countFood, type, size, latitude, longitude, status },
          { abortEarly: false }
        );
      }
      catch (err) 
      {
         return res.send();
      }

      const farms = farmsRepository.create({
        name,
        countFood, 
        type,
        size, 
        latitude, 
        longitude, 
        status 
      });

      try 
      {
         await farmsRepository.save( farms );
         return res.status(201).send();
      } 
      catch (err) 
      {
         return res.send();
      }
      
      
  },

};
