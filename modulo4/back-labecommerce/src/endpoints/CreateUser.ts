import {Request, Response} from 'express'

let reqError = 0
export const createUser = async (req:Request, res:Response): Promise<any> =>{
    try{
        const { name, email, password} = req.body 
        if(!name || !email || !password || password.length === ''){
            reqError = 401
            res.status(reqError).send('Please, verify the fields')
           
        }
        res.status(200).send('Sucessfull')
    } catch{
        res.status(500).send('Internal Server Error')
    }
}