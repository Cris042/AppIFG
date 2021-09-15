  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';

  import breed from './Breed';

  @Entity('cattle')

  export default class Cattle
  {
    
      @PrimaryGeneratedColumn('increment')
      id: number;

      @OneToMany( () => breed, ( breed ) => breed.name, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'breed' } )
      breed: breed;

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
