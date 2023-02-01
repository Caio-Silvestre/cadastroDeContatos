import { DataSource } from "typeorm";
import 'dotenv/config'

// =========================IMPORTS=================================================

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "caio_",
    password: "CS1997",
    database: "db_cadastro_clientes",
    synchronize: false,
    logging: true,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
})

export { AppDataSource }