import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from 'typeorm'
import { User } from './user.entity';
// =========================IMPORTS=================================================
@Entity('clients')
class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;	

    @Column({length: 250})
    name: string;

    @Column({length: 100})
    email: string;
    
    @Column()
    tel: string;

    
    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createDate: Date;

    @ManyToOne(() => User)
    user: User


}

export {Client}