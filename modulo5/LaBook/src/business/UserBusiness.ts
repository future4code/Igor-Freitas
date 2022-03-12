import { SingupInputDTO, User } from "../model/User";
import { Authenticator } from "../services/Authenticador";
import { IdGeneration } from "../services/idGenerator";
import { HashManager } from "../services/HashManager";
import { UserRepository } from "./UserRepository";


export class UserBusiness{
    private userData: UserRepository
    private idGenerator: IdGeneration
    private hashManager: HashManager
    private authentication: Authenticator

    constructor(userDataImplementation: UserRepository){
        this.userData = userDataImplementation
        this.idGenerator = new IdGeneration()
        this.hashManager = new HashManager()
        this.authentication = new Authenticator()
    }

    singup = async(input: SingupInputDTO) =>{
        const {name, email, password} = input
        const id = this.idGenerator.generateId()

        if (!name || !email || !password) {
            throw new Error('Preencha os campos')
        }
        if(password.length < 6) {
            throw new Error('Necessário senha com 6 ou mais caracteres')
        }
        const hashPassword = this.hashManager.createHash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        await this.userData.insert(user)
        
        const token = this.authentication.generate({id})
        return token
    }

}
