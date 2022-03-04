
import { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { User } from '../entities/Class'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { idGen } from '../services/idGen'



export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body
        const idGenerator = new idGen()
        const id = idGenerator.generate()

        if (!name || !email || !password)
            res.status(422).send('Preencha os campos corretamente.')

        if (password.length < 6) {
            res.status(401).send('A senha deve ter 6 ou mais caracteres')
        }
        
        const userDataBase = new UserDataBase()
       
        const user =  await userDataBase.findUserByEmail(email)

        if (user) {
            res.status(409).send('O e-mail já está cadastrado')
        }

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
    
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id })

       
        res.status(200).send(token ? `Token de registro: ${token}` : '')

    } catch (e: any) {
        res.status(400).send(e.message)
    }
}

