import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Cattle from '../models/Cattle';
import CattleView from '../views/CattleView';
import Breed from '../models/Breed';
import BreedView from '../views/BreedTypeView';
import pickedUsed from '../models/PicketUsed';

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
      const pickedUsedRepository = getRepository( pickedUsed );

      const name = req.body.data._parts[0][1],
      breed = req.body.data._parts[1][1],
      status = req.body.data._parts[2][1],
      initialWeight = req.body.data._parts[3][1],
      Weight = req.body.data._parts[4][1],
      purchaseValue = req.body.data._parts[5][1],
      datePurchase = req.body.data._parts[6][1],
      dateOfBirth = req.body.data._parts[7][1],
      sexo = req.body.data._parts[8][1],
      node = req.body.data._parts[9][1],
      brinco = req.body.data._parts[10][1],
      matriz = req.body.data._parts[11][1],
      count = req.body.data._parts[12][1],
      farm = req.body.data._parts[13][1],
      occupancyRate = req.body.data._parts[14][1];

      const schema = Yup.object().shape({
         name: Yup.string().required(),
         sexo: Yup.string().required(),
         node: Yup.string().notRequired(),
         brinco: Yup.number().notRequired(),
         matriz: Yup.number().required(),
         breed: Yup.string().required(),
         status: Yup.string().required(),
         initialWeight: Yup.number().required(),
         Weight: Yup.number().positive().required(),
         purchaseValue: Yup.number().required(),  
         dateOfBirth: Yup.string().required(),
         datePurchase: Yup.string().required(),
       
      });
    
      try 
      {
        await schema.validate(
          { name, sexo, node, matriz, brinco, breed, status, initialWeight, Weight, purchaseValue, dateOfBirth, datePurchase },
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
         sexo,
         node,
         matriz : matriz === "-1" ? null : matriz, 
         brinco : brinco === "-1" ? null : brinco, 
         status, 
         initialWeight, 
         Weight, 
         purchaseValue, 
         dateOfBirth, 
         datePurchase
      });
      
      try 
      {
         if( count == "")
         {
            if( farm != "-1" )
            {

               const dataObj = pickedUsedRepository.create({
                  dateEntryPicket: new Date().toLocaleDateString(),
                  dateExitPicket: null,
                  picketID: farm,
                  cattleID: name,
                  occupancyRate: occupancyRate,
                });
                     
                await pickedUsedRepository.save( dataObj );           
            
            }

            await cattleRepository.save( cattle );
            return res.status(201).send();
         }
         else
         {

            for( var i = 0; i < count; i++ )
            {
            
               const cattle = cattleRepository.create({
                  breed, 
                  name : breed  + Math.floor( Math.random() * 2560000 + 256 ) ,
                  sexo,
                  node,
                  matriz : matriz  === "-1" ? null : matriz,
                  brinco : brinco  === "-1" ? null : (  parseInt( brinco ) + i ),
                  status, 
                  initialWeight, 
                  Weight, 
                  purchaseValue, 
                  dateOfBirth, 
                  datePurchase
               });

               if( farm != "-1" )
               {

                  const dataObj = pickedUsedRepository.create({
                     dateEntryPicket: new Date().toLocaleDateString(),
                     dateExitPicket: null,
                     picketID: farm,
                     cattleID: name,
                     occupancyRate: occupancyRate,
                   });
                               
                  await pickedUsedRepository.save( dataObj );                    
                 
               }

               await cattleRepository.save( cattle );
            }

            return res.status(201).send();

         }
      } 
      catch (err) 
      {
         return res.send();
      }
  },

};
