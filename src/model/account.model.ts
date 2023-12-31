import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string

    @Column()
    password: string

    @Column({nullable: true})
    two_factory: string
}