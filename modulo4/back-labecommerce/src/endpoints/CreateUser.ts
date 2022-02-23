import {Request, Response} from 'express'
import { createU } from '../SQL Code/SQLFunctions'


let reqError = 0
 const createUser = async (req:Request, res:Response): Promise<any> =>{
    try{
        const { id, name, email, password} = req.body 
        if(!name || !email || !password || password.length === ''){
            reqError = 401
            res.status(reqError).send('Please, verify the fields')
           
        }
        await createU(id, name, email, password)
        res.status(201).send('Sucessfull')
    } catch(err:any){
        res.status(500).send(err.message)
    }
}
export default createUser