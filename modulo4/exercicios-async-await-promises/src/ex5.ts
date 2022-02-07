import { baseURL } from "./baseURL";
import Axios from "axios";
import { user } from "./ex3";
const sendNotications = async (
    users: user[],
    message: string
):Promise<void> =>{
    try{
        for(const user of users){
            await Axios.post(`${baseURL}/notifications`,{
               subsId : user.id,
               message 
            })
        }
        console.log('Ok, all sent')
    } catch{
        console.log('ERROR')
    }
}