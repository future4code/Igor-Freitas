import { connection } from "./connection";
import nextId, { setPrefix } from "react-id-generator";

export const getUsers = async (tableName: string): Promise<any> =>{
    const result = await connection()
    .select('*')
    .from(tableName)
    return result
}

export const getUser = async (id: any): Promise<any> =>{
    const result = await connection()
    .select('*')
    .from('ListToDoListUser')
    .where('id', id)
    return result
}
    setPrefix('ID')
    const ID = nextId()
    export const createUser = async (name:string,  nickname:string, email:string): Promise<any> =>{
    await connection.raw(`
        INSERT INTO ToDoListUser (id, name, nickname, email)
        VALUES("${ID}", "${name}", "${nickname}", "${email}")
    `)
}

export const updateUser = async (id:string, name:string, nickname:string): Promise<any> =>{
    await connection("ListToDoListUser")
    .update({
        name: name,
        nickname: nickname
    })
    .where("id", id)
}