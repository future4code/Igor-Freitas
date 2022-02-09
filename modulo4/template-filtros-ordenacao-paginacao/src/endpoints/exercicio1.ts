import {Request, Response} from 'express'
import { connection } from '../data/connection'

// a

export const getUserByName = async (req:Request, res:Response):Promise<void> =>{
    try{
        const name = req.query.name
        const filterName = await connection.raw(`
        SELECT id, name, email type FROM aula48_exercicio WHERE name LIKE "${name}"
        `)
        res.status(201).send(filterName [0])
    } catch(err:any){
        res.send(err.message || err.sqlMessage)
    }
}

// b

export const getUserByType = async (req:Request, res:Response):Promise<void> =>{
    try{
        const type = req.params.type
        const filterByType = await connection.raw(`
        SELECT id, name, email type FROM aula48_exercicio WHERE type LIKE "${type}"
        `)
        res.status(201).send(filterByType [0])
    }catch(err:any){
        res.send(err.message || err.sqlMessage)
    }
    
}