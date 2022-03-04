import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'

export async function getProfileById (req:Request, res:Response):Promise<any>{
    try{
        const id = req.params.id as string

        const token = req.headers.authorization as string

        const authenticador = new Authenticator()
        const tokenIsCorrect = authenticador.getTokenData(token)

        const userDatabase =  new UserDataBase()
        const profile = await userDatabase.getProfileById(id)
        
        if(!profile){
            res.status(404).send('Usuário não existe')
        }

        res.status(200).send(profile)
    } catch(e: any){
        res.status(400).send(e.message)
    }
}