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
      sexo: string; 

      @Column()
      node: string; 

      @Column()
      matriz: number; 
      
      @Column()
      brinco: number;  

      @Column()
      status: string;    

      @Column()
      initialWeight: number;  

      @Column()
      Weight: number; 

      @Column()
      purchaseValue: number; 
      
      @Column()
      datePurchase: String; 

      @Column()
      dateOfBirth: String;

  }
