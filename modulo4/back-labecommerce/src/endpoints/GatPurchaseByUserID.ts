import {Request, Response} from 'express'
import { userPurchase } from '../SQL Code/SQLFunctions'

let reqError = 0
const getPurchaseByUserID = async (req:Request, res:Response) =>{
    try{
        const userID = req.params.userID

        if(!userID){
            reqError = 404
            res.status(reqError).send('User ID not found')
        }
        const result = await userPurchase(userID)
        res.status(201).send(result)
    } catch(err:any){
        res.status(500).send(err.message)
    }
}
export default getPurchaseByUserID