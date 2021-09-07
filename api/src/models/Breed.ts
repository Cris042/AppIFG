  import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

  @Entity('breed')

  export default class Breed
  {

        @PrimaryGeneratedColumn('increment')
        id: number;

        @Column()
        name: string;

   }
