import {Request, Response} from 'express'
import { idGgenerator } from '../geradorID'
import connection from '../data/connection'


let reqError = 0
export const createUser = async (req:Request, res:Response):Promise<void> =>{
    try{
        const { email, password} = req.body
        const id = idGgenerator()

        if(!email || email.indexOf('@') === -1){
            reqError = 401
            res.status(reqError).send('Invalid e-mail')
        }
        if(!password || password.length < 6){
            reqError = 401
            res.status(reqError).send('Invalid password')
        }

       await connection('User')
       .insert({email, password})
       
    } catch(error:any){
        res.status(400).send(error.message)
    }
}