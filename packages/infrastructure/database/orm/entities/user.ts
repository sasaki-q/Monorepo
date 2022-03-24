import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({name: "is_active"})
    isActive: boolean

    @Column({
        type: "enum",
        enum: ["MASTER" || "ADMIN" || "USER"],
    })
    role: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date
}