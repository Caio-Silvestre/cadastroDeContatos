import { DataSource } from "typeorm";
import 'dotenv/config'
import { User } from "./entities/user.entity";
import { Client } from "./entities/clients.entity";
import { initial1680224255225 } from "./migrations/1680224255225-initial";



// =====IMPORTS==========================================================================

const AppDataSource = new DataSource(
    process.env.NODE_ENV == "test" ?{
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: ['src/entities/*.ts'],
    }:
    {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    synchronize: false,
    logging: true,
    entities: [User, Client],
    migrations: [initial1680224255225],
})


export { AppDataSource }