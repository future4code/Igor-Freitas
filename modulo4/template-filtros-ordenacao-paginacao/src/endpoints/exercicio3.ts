import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function selectPerPage (page:number):Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type FROM aula48_exercicio LIMIT 5 OFFSET "${page}"
    `)
    return result [0]
}

export const getUserByPage = async (req:Request, res:Response): Promise<void> =>{
    try{
        let page:number = Number(req.query.page)
        let offset = 5 * (page - 1)
        const users = await selectPerPage(offset)

        if(!users.length){
            res.statusCode = 404
            throw new Error('Not Found')
        }
        res.status(201).send(users)
    } catch(err:any){
        res.send(err.message || err.sqlMessage)
    }
}