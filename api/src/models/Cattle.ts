  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('cattle')

  export default class Cattle
  {
    
      @PrimaryGeneratedColumn('increment')
      id: number;
      
      @Column()
      breed: string;   

      @Column()
      name: string;   

      @Column()
      status: boolean;    

      @Column()
      initialWeight: number;  

      @Column()
      Weight: number; 

      @Column()
      purchaseValue: number; 
      
      @Column()
      datePurchase: Date;

      @Column()
      dateOfBirth: Date;

  }
