import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'




export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body
       

        if (!email || !password)
            res.status(422).send('Preencha os campos corretamente.')

        
        const userDataBase = new UserDataBase()
       
        const user =  await userDataBase.findUserByEmail(email)

        if (!user) {
            res.status(409).send('O e-mail não está cadastrado')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send('Senha ou e-mail incorretos')
        }
        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId()})

       
        res.status(200).send(token ? `Usuário logado com sucesso: ${token}` : '')

    } catch (e: any) {
        res.status(400).send(e.message)
    }
}

