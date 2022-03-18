import { User } from '../entities/class'
import {Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'


const userBusiness = new UserBusiness()
export class UserController {
    signup = async (req:Request, res:Response)=>{
        try{
         const {name, email, password, role} = req.body

           

            const token = await userBusiness.singup(name, email, password, role)
            console.log(token)
            res.status(201).send(token)
         } catch (e: any) {
            res.status(400).send(e.message)
        }
    }

    login = async(req:Request, res:Response) =>{
        try{
           const {email, password} = req.body

           const token = userBusiness.login(email, password)

        }catch (e: any) {
            res.status(400).send(e.message)
        }
   
    }
    getAllUsers = async(req:Request, res:Response):Promise<any> =>{
        const user = await userBusiness.getAllUsers()
        res.status(200).send(user)
      }

      deleteUser = async(req:Request, res:Response):Promise<void> =>{
          try{
            const id = req.params.id as string
            await userBusiness.deleteUser(id)
            res.status(200).send('Deletado')
          } catch(e:any){
            res.status(400).send(e.message)
          }
          
      }
}