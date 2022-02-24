import baseDataBase from "./BaseDataBase";
import { User } from "../entities/User";

export class UserDataBase extends baseDataBase{

  async createUser(user:User){
    await baseDataBase.connection('Cookenu').insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword()
    })
  }


    async findUserByEmail(email:string):Promise<User>{
        try{
            const user = await baseDataBase.connection('Cookenu')
            .select('*')
            .where({email})

            return user[0] && User.toUserModel(user[0])
        } catch(e:any){
            throw new Error(e.sqlMessage || e.message)
        }
    }


}

