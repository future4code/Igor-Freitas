import { Request, Response } from "express"
import { getUserByID } from "./getUserByID"
import { getData } from "../services/genToken"

export const profile = async (req:Request, res:Response) => {
   try{
    const token = req.headers.authorization as string
    
    const authenticationData = getData(token)

    const user = await getUserByID(authenticationData.id)

    res.status(200).send({
        id: user.id,
        email: user.email,
      })

   } catch(error:any){
       res.status(400).send(error.message)
   }

} 