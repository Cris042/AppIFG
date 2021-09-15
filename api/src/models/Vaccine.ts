import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('vaccine')

export default class Vaccine
{
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    doses: number;

    @Column()
    dosesTime: number;

    @Column()
    timeEffective: number;

}
