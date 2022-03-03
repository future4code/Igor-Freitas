import baseDataBase from "../entities/BaseDataBase";
import { Recipie, User } from "../entities/Class";


export class UserDataBase extends baseDataBase {

    async createUser(user: User) {
        console.log(user)
        await baseDataBase.connection('Cookenu').insert({
            id: user.getId(),
            nome: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }


    async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await baseDataBase.connection('Cookenu')
                .select('*')
                .where({ email })

            return user[0] && User.toUserModel(user[0])
        } catch (e: any) {
            throw new Error(e.sqlMessage || e.message)
        }
    }

    async getProfile(id: string): Promise<any> {
        try {
            const profile = await baseDataBase.connection('Cookenu')
                .select("id", "nome", "email")
                .where({ id })

            return profile[0] && User.toUserModel(profile[0])
        } catch (e: any) {

            throw new Error(e.sqlMessage || e.message)
        }
    }

    async getProfileById(id: string): Promise<any> {
        try {
            const profileById = await baseDataBase.connection('Cookenu')
            .select('id','nome', 'email')
            .where({id})

            return profileById[0] && User.toUserModel(profileById[0])
        } catch (e: any) {

            throw new Error(e.sqlMessage || e.message)
        }
    }

  
}


