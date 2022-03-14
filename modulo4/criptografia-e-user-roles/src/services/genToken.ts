import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types/types'

export function genToken(payload:AuthenticationData):string {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: '1h'
        }
    )
}

export const getData = (token:string):AuthenticationData =>{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id,
        role:payload.role
    }
    return result
}