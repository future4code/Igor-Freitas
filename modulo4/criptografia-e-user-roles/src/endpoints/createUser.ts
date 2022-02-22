import {Request, Response} from 'express'

import connection from '../data/connection'
import { HashManager } from '../services/genHash'
import { genID } from '../services/genID'


let reqError = 0
export const createUser = async (req:Request, res:Response):Promise<void> =>{
    try{
        const { email, password, role} = req.body
        const id = genID
       
        const cypherPw:string = new HashManager().createHash(password)

        if(!email || email.indexOf('@') === -1){
            reqError = 401
            res.status(reqError).send('Invalid e-mail')
        }
        if(!password || password.length < 6){
            reqError = 401
            res.status(reqError).send('Invalid password')
        }
        if(!role){
            reqError = 401
            res.status(reqError).send('Please, choose a role')
        }

        res.status(201).send('Sucessfull')

       await connection('Users')
       .insert({
        id,
        email, 
        password:cypherPw, 
        role})
       
    } catch{
        res.status(400).end()
    }
}