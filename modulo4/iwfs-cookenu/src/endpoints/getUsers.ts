import baseDataBase from "../data/BaseDataBase"
import { Response, Request } from "express"

export async function getAllUsers(res:Response, req:Request) {
    try{
        const getU = new baseDataBase()
        const get = getU.getAllUsers()
        res.status(201).send(get)
    }catch(e:any){
        
    }
}