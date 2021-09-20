import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';


export default {

  async index( req: Request, res: Response ) 
  {   
      return res.json( );
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
