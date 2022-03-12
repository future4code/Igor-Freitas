import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { UserRepository } from "../business/UserRepository";


export class UserDatabase extends BaseDatabase implements UserRepository{
    protected TABLE_USERS = ''
    protected TABLE_FRIENDS = ''
    
    insert = async (user:User) =>{
        try{
            await BaseDatabase.connection(this.TABLE_USERS)
            .insert(user)
        } catch(e:any){
            throw new Error('Erro ao registrar usuário')
        }
    }

    findUserByEmail = async (email: string) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_USERS)
                .select()
                .where({ email })
            if (!result[0]) {
                return null
            }
            return User.toUserModel(result[0])
        } catch (error: any) {
            throw new Error('Erro na busca por email')
        }
    }
    findUserById = async (id: string) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_USERS)
                .select()
                .where({ id })
            if (!result[0]) {
                return null
            }
            return User.toUserModel(result[0])
        } catch (error: any) {
            throw new Error('Erro na busca por id')
        }
    }
}