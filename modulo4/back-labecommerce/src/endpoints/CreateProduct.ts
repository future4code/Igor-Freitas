import {Request, Response} from 'express'
import { createProducts } from '../SQL Code/SQLFunctions'

let reqError = 0
 const createProduct = async (req:Request, res:Response):Promise<any> =>{
    try{   
        const {id, name, price, imgURL} = req.body 
        if(!name ||  !price || !imgURL){
            reqError = 401
            res.status(reqError).send('Please, field the fields')
        }
        await createProducts(id, name, price, imgURL)
        res.status(201).send('Created')
    } catch(err:any){
        res.status(500).send(err.message)
    }

}

export default createProduct