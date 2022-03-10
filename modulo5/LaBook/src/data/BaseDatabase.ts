import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client: 'msyql',
    connection:{
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.SCHEMA,
        port: 3306,
        multipleStatements: true
    }
})
