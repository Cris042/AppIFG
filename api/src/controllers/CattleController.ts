import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Cattle from '../models/Cattle';
import CattleView from '../views/CattleView';
import Breed from '../models/Breed';
import BreedView from '../views/BreedTypeView';

export default {

  async index( req: Request, res: Response ) 
  {   
      const cattleRepository = getRepository( Cattle );
      const cattle = await cattleRepository.find({ });

      return res.json( CattleView.renderMany( cattle ) );
  },

  async listBreed( req: Request, res: Response ) 
  {
      const breedRepository = getRepository( Breed );
      const breads = await breedRepository.find({ });

      return res.json( BreedView.renderMany( breads ) );
  },

  async show( req: Request, res: Response)
  {
      return res.json( );
  },

  async create( req: Request, res: Response )
  {     

      const cattleRepository = getRepository( Cattle );

      const name = req.body.data._parts[0][1],
      breed = req.body.data._parts[1][1],
      status = req.body.data._parts[2][1],
      initialWeight = req.body.data._parts[3][1],
      Weight = req.body.data._parts[4][1],
      purchaseValue = req.body.data._parts[5][1],
      datePurchase = req.body.data._parts[6][1],
      dateOfBirth = req.body.data._parts[7][1];

      const schema = Yup.object().shape({
         name: Yup.string().required().min(3),
         breed: Yup.string().required(),
         status: Yup.boolean().required(),
         initialWeight: Yup.number().required(),
         Weight: Yup.number().required(),
         purchaseValue: Yup.number().required(),  
         dateOfBirth: Yup.string().required(),
         datePurchase: Yup.string().required(),
      });
    
      try 
      {
        await schema.validate(
          { name, breed, status, initialWeight, Weight, purchaseValue, dateOfBirth, datePurchase },
          { abortEarly: false }
        );
      }
      catch (err) 
      {
         return res.send();
      }

      const cattle = cattleRepository.create({
         breed, 
         name, 
         status, 
         initialWeight, 
         Weight, 
         purchaseValue, 
         dateOfBirth, 
         datePurchase
      });

      console.log( Weight );

      try 
      {
         await cattleRepository.save( cattle );
         return res.status(201).send();
      } 
      catch (err) 
      {
         return res.send();
      }
  },

};
