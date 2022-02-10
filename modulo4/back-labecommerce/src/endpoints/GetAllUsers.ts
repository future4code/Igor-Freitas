import {Request, Response} from 'express'
import { getAllU } from './SQLFunctions'


let reqError = 0
export const getAllUsers = async (req:Request, res:Response) =>{
    try{
      const result = await getAllU()
      if(result.length === 0){
          reqError = 404
          res.status(reqError).send('No users in Database')
      }
      res.status(201).send(result)
    } catch{
        res.status(500).send('Internal Server Error')
    }
}