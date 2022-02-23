import { Request, Response } from "express"
import { connection } from "../data/connection"


export  async function selectByOrder (order:string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM  aula48_exercicio ORDER BY ${order};
    `)
    return result [0]
}

export const getByOrder = async (req:Request, res:Response): Promise<void> =>{
    try{
        let order = req.query.order as string
        if(order === '') { order = 'email'}
        const users = await selectByOrder(order)
        if(!users.length ){
            res.statusCode = 404
            throw new Error('Not found')
        }
        res.status(200).send(users)
    } catch(err:any){

        res.send(err.message || err.sqlMessage)
    }
}