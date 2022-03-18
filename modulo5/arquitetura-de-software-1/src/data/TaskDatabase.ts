import { User} from '../entities/class';

import { BaseDatabase } from './BaseDatabase';

export class TaskDatabase extends BaseDatabase{
    register = async (user:User) =>{
        await TaskDatabase.connection('User_Arq').insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        })
    }
    

    findUserByEmail = async(email:string) =>{
      try{
        const result = await TaskDatabase.connection('User_Arq')
        .select('id', 'name', 'email', 'role')
        .where({email})

        if(!result[0]){
            throw new Error('Usuário não encontrado');
        }
        return result[0]

      } catch(e:any){
        throw new Error(e.sqlMessage || e.message)
      }
    }

    findUserById= async (id:string) =>{
      try{
        const result = await TaskDatabase.connection('User_Arq')
        .select('id','name', 'email', 'role')
        .where({id})
      } catch(e:any){
        throw new Error(e.sqlMessage || e.message)
      }
    }

    getAllUsers = async():Promise<any> =>{
      const user = await TaskDatabase.connection('User_Arq')
      .select('*')
      return user
    }

    deleteUser = async (id:string) =>{
      try{
        await TaskDatabase.connection('User_arq')
        .where(id)
        .del()

      } catch(e:any){
        throw new Error(e.sqlMessage || e.message)
      }
    }

}
