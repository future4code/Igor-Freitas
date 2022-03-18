import { Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserDatabase } from '../data/UserDatabase'
import { SingupInputDTO } from '../model/User'

export class UserController {
    private userBusiness:UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(
            new UserDatabase()
        )
    }
    singnup = async(req:Request, res:Response) =>{
        const{name, email, password} = req.body

        const input: SingupInputDTO = {
            name,
            email,
            password
        }
        
        try {

        } catch(e:any){
           if(e.message) return res.status(400).send(e.message)
           res.status(400).send('Erro ao registrar usuário')
        }
    }

    login = async(req:Request, res:Response) =>{
        const {email, password} = req.body

        try{
            const token = await this.userBusiness.login(email, password)
            res.status(200).send({message: 'Logado', token})          
        } catch(e:any){
            if(e.message) return res.status(400).send(e.message)
            res.status(400).send('Email ou senha incorretos')
        }
    }
}