  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('picket')

  export default class Picket
  {
         
      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      name: string;

      @Column()
      countFood: number;

      @Column()
      type: string;

      @Column()
      size: number;

      @Column()
      latitude: number;

      @Column()
      longitude: number;

      @Column()
      status: number;

  }
