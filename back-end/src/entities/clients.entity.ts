import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'

// =========================IMPORTS=================================================
@Entity('clients')
class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;	

    @Column({length: 250, unique: true})
    name: string;

    @Column({length: 100})
    email: string;
    
    @Column()
    tel: string;

    
    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createDate: Date;



}

export {Client}