import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';

  import vaccine from './Vaccine';
  import cattle from './Cattle';

  @Entity('picket')

  export default class PicketUsed
  {

      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      dateApplication: Date;

      @OneToMany( () => vaccine, ( vaccine ) => vaccine.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'vaccineID' } )
      picket: vaccine;

      @OneToMany( () => cattle, ( cattle ) => cattle.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'cattleID' } )
      cattle: cattle;

  }
