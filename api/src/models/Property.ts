  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('property')

  export default class Property
  {
    
      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      name: string;

      @Column()
      email: string;

      @Column()
      telephone: number;

      @Column()
      size: number;

      @Column()
      latitude: number;

      @Column()
      longitude: number;

  }
