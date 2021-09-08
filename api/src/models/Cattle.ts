  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';

  import breed from './Breed';

  @Entity('cattle')

  export default class Cattle
  {
    
      @PrimaryGeneratedColumn('increment')
      id: number;

      @OneToMany( () => breed, ( breed ) => breed.id, {
        cascade: ['insert', 'update', 'remove'],
      })

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
