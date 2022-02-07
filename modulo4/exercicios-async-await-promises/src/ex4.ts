import { baseURL } from "./baseURL";
import Axios from "axios";

// Função de PUT, pois o DATABASE já esá criado.

async function createNews(
    title:string,
    content:string,
    date:number
): Promise<void> {
    await Axios.put(`${baseURL}/news`,{
        title: title,
        content: content,
        date: date
    })
}