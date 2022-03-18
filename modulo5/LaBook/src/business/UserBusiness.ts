import { SingupInputDTO, User } from "../model/User";
import { Authenticator } from "../services/Authenticador";
import { IdGeneration } from "../services/idGenerator";
import { HashManager } from "../services/HashManager";
import { UserRepository } from "./UserRepository";
import { isError } from "util";


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

    login = async(email:string, password:string) =>{
        if(!email || !password) {
            throw new Error('Preencha os campos de e-mail e senha')
        }
        if(password.length < 6){
            throw new Error('A senha deve ter no mínimo 6 caracteres ')
        }

        const user = await this.userData.findUserByEmail(email)
        if(!user){
            throw new Error('Esse e-mail não está cadastrado, faça o seu cadastro.')
        }

        const passwordIsCorrect = this.hashManager.compareHash(password, user.getPassword())
        if(!passwordIsCorrect){
            throw new Error('Senhao ou e-mail incorretos')
        }

        const token = this.authentication.generate({id: user.getId()})
        return token
    }

}
