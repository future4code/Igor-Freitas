import { UserDataBase } from "../data/UserDataBase"
import { Response, Request } from "express"
import { Authenticator } from "../services/Authenticator"

export async function getProfile(req: Request, res: Response):  Promise<any>{
    try {
        const token = req.headers.authorization as string
        
        const authenticator = new Authenticator()
        const tokenIsCorrect = authenticator.getTokenData(token)

        const userDatabase = new UserDataBase()
        const user = await userDatabase.getProfile(tokenIsCorrect.id)

        res.status(200).send(user)
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}