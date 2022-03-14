import { Request, Response } from "express";
import { genToken } from "../service/token";
import { getUserByEmail } from "./getUserByEmail";

let reqError = 0
export const login = async (req:Request, res:Response):Promise<any> =>{
    try{
        const {email, password} = req.body
        if(!email || email.indexOf('@') === -1){
            reqError = 401
            res.status(reqError).send('Invalid e-mail')
        }
        if(!password || password.length < 6){
            reqError = 401
            res.status(reqError).send('Invalid password')
        }
        const user = await getUserByEmail(email)

        const token = genToken({
            id:user.id
        })
        res.status(201).send(token)
    } catch(error:any){
        res.status(400).send(error.message)
    }
}