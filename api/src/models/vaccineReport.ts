import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';

  import vaccine from './Vaccine';
  import cattle from './Cattle';

  @Entity('picket')

  export default class PicketUsed
  {

      @PrimaryGeneratedColumn('increment')
      id: number;

      @OneToMany( () => vaccine, ( vaccine ) => vaccine.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @OneToMany( () => cattle, ( cattle ) => cattle.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @Column()
      dateApplication: Date;

  }
