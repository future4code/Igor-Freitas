import { Response, Request } from "express"
import { RecipieDataBase } from "../data/RecipieDataBase"
import { Authenticator } from "../services/Authenticator"


export async function getRecipeById(req:Request, res:Response):Promise<any>{
    try{
        const id = req.params.id as string

        if(!id){
            res.status(401).send('Receita não encontrada')
        }
        const token = req.headers.authorization as string
        
        const authenticator = new Authenticator()
        const tokenIsCorrect = authenticator.getTokenData(token)

       const recipe = new RecipieDataBase()
      const getRecipe = await recipe.getRecipie(id)

        res.status(200).send(getRecipe)
    } catch(e:any){
        res.status(500).send(e.message)
    }
}

