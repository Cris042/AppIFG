import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
  

  @Entity('orphanages')

  export default class Farm 
  {

    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    name: string;
    
  
  }
  