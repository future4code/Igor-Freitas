
import { TaskDatabase } from "../data/TaskDatabase"
import { User } from "../entities/class"
import { Authenticador } from "../services/Authenticador"
import { HashManager } from "../services/HashManaget"
import { idGenerator } from "../services/idGenerator"
import { USER_ROLES } from "../types/user"

const taskDatabase = new TaskDatabase() 
export class UserBusiness  {
    
     singup = async (name:string, email:string, password:string, role:USER_ROLES) => {
  
        const idGen = new idGenerator()
        const id = idGen.generateId()

        if (!name || !email || !password || !role)
           throw new Error('Preencha os campos corretamente.')

        if (password.length < 6) {
            throw new Error('A senha deve ter 6 ou mais caracteres')
        }
        

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)


        const newUser = new User(id, name, email, hashPassword, role)
        
        await taskDatabase.register(newUser)

        const authenticator = new Authenticador()
        const token = authenticator.generateToken({ id, role })
         
        return token
    }


    login = async(email:string, password:string) =>{

        if(!email || !password){
            throw new Error('Preencha o campo de e-mail e password')
        }

        const user = await taskDatabase.findUserByEmail(email) 

        if(!user){
            throw new Error('E-mail não ')
        }

        const passwordIsCorrect = new HashManager().compare(password, user.getPassowrd())

        if(!passwordIsCorrect){
            throw new Error('E-mail ou senha incorretos')
        }

        const authenticator = new Authenticador()
        const token =  authenticator.generateToken({id: user.getId(), role: user.getRole()})
    }

       getAllUsers = async () =>{

           const result = taskDatabase.getAllUsers()
           return result
       }

       deleteUser = async(id:string) =>{
        const user = await taskDatabase.findUserById(id)
        await taskDatabase.deleteUser(id)
       }
       
}
