  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';

  import picket from './Picket';
  import cattle from './Cattle';

  @Entity('picket')

  export default class PicketUsed
  {

      @PrimaryGeneratedColumn('increment')
      id: number;

      @OneToMany( () => picket, ( picket ) => picket.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @OneToMany( () => cattle, ( cattle ) => cattle.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @Column()
      dateEntryPicket: Date;

      @Column()
      dateExitPicket: Date;

  }
