import { baseURL } from "./baseURL";
import { user } from "./ex3";
import Axios from "axios";

//  Retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises
// A vantagem é fazer tudo de uma só vez e apenas com um retorno.

const sendNotications = async (
    users: user[],
    message: string
):Promise<void> =>{
    try{
      const mapPromise = users.map(user=>{
         return Axios.post(`${baseURL}/notifications`,{
               subsId : user.id,
               message 
            })
      })
      await Promise.all(mapPromise)
    } catch{
        console.log('ERROR')
    }
}