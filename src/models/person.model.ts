import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity('person')
export class Person{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    phone: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date
}