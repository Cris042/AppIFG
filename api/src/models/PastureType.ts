import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
  

@Entity('pastureType')

export default class PastureType
{

      @PrimaryGeneratedColumn('increment')
      id: number;

      @Column()
      name: string;

      @Column()
      amountOffood: number;

 }
