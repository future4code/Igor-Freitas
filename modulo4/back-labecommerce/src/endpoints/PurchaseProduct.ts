import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { purchaseProduct } from '../SQL Code/SQLFunctions'


let reqError = 0
const purchase = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userID, productID, quanty } = req.body as { userID: string, productID: string, quanty: number }

        if(!userID || !productID || !quanty){
            reqError = 401
            res.status(reqError).send('Please, fill the fields')
        }
        await purchaseProduct(userID, productID, quanty)
        res.status(201).send('Purschached')
    } catch (err: any) {
        res.status(500).send(err.message)
    }
}
export default purchase

