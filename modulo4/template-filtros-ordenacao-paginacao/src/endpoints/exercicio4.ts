import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsers = async (req:Request, res:Response): Promise<void> =>{
    try{
        let name = req.query.name as string;
        let type = req.query.type as string;
        let order = req.query.order as string;
        let sort = req.query.sort as string;
        let page = Number(req.query.page)

        if(page < 1 || isNaN(page)){
            page = 1
        }
        let size = 5
        let offset = size * (page -1)

        let filter = 'name'
        let search = ''

        if(name){
            search = name
        }
        
        if(type){
            search = type, filter= 'type'
        }

        if(!sort){
            sort = 'name'
        }

        if(!order){
            order = "DESC"
         }

         const result = await connection('aaula48_exercicio"')
         .where(filter, 'like', `${search}`).orderBy(sort, order).limit(size).offset(offset)

         if(!result.length){
             res.statusCode = 404
             throw new Error('Users not found')
         }
         res.status(200).send(result)
    } catch(err:any){
        res.send(err.message || err.sqlMessage)
    }
}