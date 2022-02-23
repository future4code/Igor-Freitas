import Axios from "axios"
import { baseURL } from "./baseURL"

// 2
// Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico
const getSubs = async ():Promise<any[]> =>{
    const res = await Axios.get(`${baseURL}/subscribers`)
    return res.data
    }
    
