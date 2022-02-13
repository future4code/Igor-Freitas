import {Request, Response} from 'express'
import { getAllP } from '../SQL Code/SQLFunctions'


let reqError = 0
 const getAllProducts = async (req:Request, res:Response) =>{
    try{
        const result = await getAllP()
        if(result.length === 0){
            reqError = 404
            res.status(reqError).send('No products in Database')
        }
        res.status(201).send(result)
    } catch(err:any){
        res.status(500).send(err.message)
    }
}
export default getAllProducts