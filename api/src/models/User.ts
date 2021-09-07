  import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

  @Entity('user')

  export default class User
  {

      @PrimaryGeneratedColumn('increment')
      id: number;
    
      @Column()
      name: string;

      @Column()
      email: string;

      @Column()
      telephone: string;

  }
  