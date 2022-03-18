import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { authenticationData } from '../types/user'


dotenv.config()

export class Authenticador {
    generateToken = ( payload: authenticationData ):string =>{
        return jwt.sign(payload, process.env.JWT_KEY as string,
        {
            expiresIn:"32h"
        }
        )
    }
    
    getTokenData = (token:string):authenticationData =>{
        return jwt.verify(token, process.env.JWT_KEY as string) as authenticationData
    }
}