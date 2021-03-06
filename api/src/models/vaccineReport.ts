import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';

  import vaccine from './Vaccine';
  import cattle from './Cattle';

  @Entity('vaccineReport')

  export default class VaccineReport
  {

      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      dateApplication: Date;

      @OneToMany( () => vaccine, ( vaccine ) => vaccine.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'vaccineID' } )
      vaccine: vaccine;

      @Column()
      vaccineID: number;

      @OneToMany( () => cattle, ( cattle ) => cattle.id, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'cattleID' } )
      cattle: cattle;

      @Column( { name: 'cattleID', type: 'int' })
      cattleID: number;

  }
