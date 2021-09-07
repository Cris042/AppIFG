  import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  import property from './Property';
  
  @Entity('images')

  export default class Image 
  {

        @PrimaryGeneratedColumn('increment')
        id: number;
    
        @Column()
        path: string;
    
        @ManyToOne( () => property, ( property ) => property.images )
        @JoinColumn( { name: 'orphanage_id' } )
        Property: property;

  }
  