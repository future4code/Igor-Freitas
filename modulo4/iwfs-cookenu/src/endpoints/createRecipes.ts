
import { Response, Request } from "express"
import { Authenticator } from "../services/Authenticator"
import { idGen } from "../services/idGen"
import { Recipie } from "../entities/Class"
import { RecipieDataBase } from "../data/RecipieDataBase"

export async function createRecipie(req:Request, res:Response):Promise<any>{
    try{
        const token = req.headers.authorization as string
        const {title, description} = req.body
        const idGenerator = new idGen()
        const id = idGenerator.generate()
        const data = new Date()

        if(!title || !description){
            res.status(422).send('Preencha todos os campos')
        }

        const authenticator = new Authenticator()
        const tokenIsCorrect = authenticator.getTokenData(token)
        console.log(tokenIsCorrect)
        if(!tokenIsCorrect){
            res.status(422).send('Token inválido')
        }
         const recipie: Recipie = new Recipie(id, tokenIsCorrect.id, title, description, data)
         const recipieDataBase = new RecipieDataBase()
         await recipieDataBase.createRecipie(recipie)

         res.status(201).send('Receita criada')
    } catch(e:any){
        res.status(500).send(e.message)
    }
}