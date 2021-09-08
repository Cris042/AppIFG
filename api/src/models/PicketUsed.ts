  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';

  import picket from './Picket';
  import cattle from './Cattle';
import Picket from './Picket';

  @Entity('picket')

  export default class PicketUsed
  {

      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      dateEntryPicket: Date;

      @Column()
      dateExitPicket: Date;

      @OneToMany( () => picket, ( picket ) => picket.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'picketID' } )
      picket: picket;

      @OneToMany( () => cattle, ( cattle ) => cattle.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'cattleID' } )
      cattle: cattle;


  }
