  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

   @Entity('picketUsed')

  export default class PicketUsed
  {

      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      dateEntryPicket: String;

      @Column()
      dateExitPicket: String;

      @Column()
      picketID: number;

      @Column( )
      cattleID: string;


  }
