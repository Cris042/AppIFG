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
      initialWeight: number;  

      @Column()
      Weight: number; 

      @Column()
      note: string;  

      @Column()
      purchaseValue: number; 
      
      @Column()
      dailyConsumption: number;  

      @Column()
      datePurchase: Date;

      @Column()
      dateOfBirth: Date;

  }
