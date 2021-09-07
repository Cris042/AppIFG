  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';

  import Image from './Image';

  @Entity('property')

  export default class Property
  {
    
      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      name: string;

      @Column()
      email: string;

      @Column()
      telephone: string;

      @Column()
      size: number;

      @Column()
      latitude: number;

      @Column()
      longitude: number;

      @OneToMany( () => Image, ( image ) => image.Property, {
        cascade: ['insert', 'update', 'remove'],
      })

      @JoinColumn( { name: 'orphanage_id' } )
      images: Image[ ];

  }
