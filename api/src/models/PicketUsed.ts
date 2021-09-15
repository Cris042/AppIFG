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
      dateEntryPicket: Date;

      @Column()
      dateExitPicket: Date;

      @Column()
      picketID: number;

      @Column( )
      cattleID: number;


  }
