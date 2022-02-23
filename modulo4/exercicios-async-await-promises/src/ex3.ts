import Axios from "axios";
import { baseURL } from "./baseURL";

export type user = {
	id: string;
	name: string;
	email: string;
}

//  NÃO TEREMOS ERRO DE TIPAGEM, POIS JÁ ESTÁ EXPLÍCITO AQUI NO TYPE
// SIM, POIS FILTRANDO VOCÊ IRÁ FOCAR NAS INFORMAÇÕES CORRETAS


const getSubs = async():Promise<user[]> =>{
    const res = await Axios.get(`${baseURL}/subscribers`);
    return res.data.map((res:any)=>{
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}