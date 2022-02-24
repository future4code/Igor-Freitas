import * as bcrypt from 'bcryptjs'


export class HashManager{
    async hash(text:string):Promise<string> {
        const rounds = Number(process.env.COST)
        const salt = await bcrypt.genSalt(rounds)
        
        return bcrypt.hash(text, salt)
    }

    async compare(text:string, hash:string):Promise<boolean>{
        return bcrypt.compare(text, hash)
    }
}
 