import baseDataBase from "../entities/BaseDataBase";
import { Recipie } from "../entities/Class";


export class RecipieDataBase extends baseDataBase{

    async createRecipie(recipie: Recipie):Promise<any>{
        try{
            const recipies = await baseDataBase.connection('Receitas').insert({
                id: recipie.getId(),
                criador_id: recipie.getCreator(),
                titulo: recipie.getTitle(),
                descricao: recipie.getDescription(),
                data: recipie.getDate()
            })
            return recipies[0] && Recipie.toUserModel(recipies[0])
        } catch(e:any){
            throw new Error(e.sqlMessage || e.message)
        }
    }

    async getRecipie(id:string){
        try{
            const recipie = await baseDataBase.connection('Receitas')
            .select('id', 'titulo', 'descricao', 'data')
            .where({id})
            return recipie[0] && Recipie.toUserModel(recipie[0])

        } catch(e:any){
            throw new Error(e.sqlMessage || e.message)
        }
    }

}