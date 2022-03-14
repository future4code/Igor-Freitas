import {compareSync, genSaltSync, hashSync} from 'bcryptjs'
import dotenv from "dotenv"
import { stringify } from 'querystring';


dotenv.config();

export class HashManager {
    createHash = (plainText: string):string =>{
        const rounds: number = Number(process.env.const)
        const salt: string = genSaltSync(rounds)
        const cyhperText: string = hashSync(plainText, salt)

        return cyhperText
    }

   compareHash = (plainText:string, hash:string):boolean =>{
    return compareSync(plainText, hash)
   }
}