import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from 'typeorm'
import { Client } from './clients.entity';

// =========================IMPORTS=================================================
@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;	

    @Column({length: 250, unique: true})
    name: string;

    @Column({length: 100, unique: true})
    email: string;

    @Column()
    tel: string;

    @Column({length: 200})
    password: string;
    
    
    @Column({ default: true })
    isActive: boolean;
    
    @CreateDateColumn()
    createDate: Date;
    
    @OneToMany(() => Client, clients => clients.user)
    clients: Client[]

}

export {User}