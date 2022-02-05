import { connection } from "./connection";

// ver todos  users
export const getUsers = async (tableName: string): Promise<any> => {
    const result = await connection()
        .select('*')
        .from(tableName)
    return result
}


// ver pelo id 
export const getUser = async (id: any): Promise<any> => {
    const result = await connection().select('*').from('TodoListUser').where('id', id)
    return result
}


// criar user
export const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection.raw(`
        INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES("${Date.now()}", "${name}", "${nickname}", "${email}")
    `)
}

// att user
export const updateUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname
        })
        .where("id", id)
}
// criar task
export const tasks =  async (title:string, description:string, limitDate:string, creatorUserId:string) =>{
    await connection.raw(`
        INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
        VALUES("${Date.now()}","${title}", "${description}", "${limitDate}", "${creatorUserId}")
    `)
}

// pegar task por id
export const getTask = async (id:string) =>{
    const result = await connection("TodoListTask").select("*").from("TodoListTask").where("id", id)
    return result
}