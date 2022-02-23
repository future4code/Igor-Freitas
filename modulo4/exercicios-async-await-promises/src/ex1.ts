import Axios from "axios";
import { baseURL } from "./baseURL";
import {user} from './ex3'

// 1
// GET
// Promise<any>

async function getSubs():Promise<user[]> {
    const res = await Axios.get(`${baseURL}/subscribers`)
    return res.data
}


