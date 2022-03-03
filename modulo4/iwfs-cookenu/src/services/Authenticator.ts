import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import AuthenticationData from '../entities/AuthenticationData'


dotenv.config()




export class Authenticator {
    generate(input: AuthenticationData):string {
        const token = jwt.sign(input,  process.env.JWT_KEY as string, {

            expiresIn: process.env.EXPIRES_IN
        })
        return token
    }


    getTokenData(token:string):AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY as string)
        return data as AuthenticationData
    }
}