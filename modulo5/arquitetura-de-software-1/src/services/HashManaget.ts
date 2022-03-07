import * as bcrypt from 'bcrypt'
import dotenv from 'dotenv'



dotenv.config()
export class HashManager{
    hash = async(plainText:string):Promise<string> =>{
        const rounds = Number(process.env.COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plainText, salt)
    }
    compare(text:string, hash:string):Promise<boolean>{
        return bcrypt.compare(text, hash)
    }
}