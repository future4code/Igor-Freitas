import { appendFile } from "fs";
import { connect } from "http2";
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
export const tasks = async (title: string, description: string, limitDate: string, creatorUserId: string) => {
    await connection.raw(`
        INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
        VALUES("${Date.now()}","${title}", "${description}", "${limitDate}", "${creatorUserId}")
    `)
}


// pegar task por id
export const getTask = async (id: string) => {
    const result = await connection("TodoListTask").select("*").from("TodoListTask").where("id", id)
    return result
}

// atribuir user resposnavel pela task
export const responsible = async (taskID: string, userResponsibleID: string) => {
    const result = await connection.raw(`
    INSERT INTO TodoListResponsibleUserTaskRelation (task_id, responsible_user_id)
    VALUES(
        "${taskID}",
        "${userResponsibleID}"
    );
        `)
    return result

}


// pegar todos os users
export const getAllUsers = async () => {
    const result = await connection().select("*").from("TodoListUser")
    return result
}


// pegar responsavel pela task

export const getResponsibleUser = async (id: string) => {
    const result = await connection()
        .select('*')
        .from('TodoListResponsibleUserTaskRelation')
    return result
}

// pegar task por id
export const getTaskByID = async (id: string) => {
    const result = await connection()
        .select('*')
        .from('TodoListTask ')
    return result
}

// pegar task do user x ou y 
export const getTaskByUserId = async (creatorUseId: string) => {
    const result = await connection.raw(`
    SELECT t.id as taskId, title, description, limit_date as limitDate, status, creator_user_id as creatorUserId, u.nickname as creatorUserNickName FROM TodoListTask t
    INNER JOIN TodoListUser u ON u.id = creator_user_id WHERE creator_user_id = "${creatorUseId}"
    `)
    return result
}

// atualizar task
export const attTask = async (id: string) => {
    const result = await connection.raw(`
    UPDATE TodoListTask
    SET status = "doing"
    WHERE id = "${id}";
    `)
    return result
}

// pegar task por status
export const getTaskByStatus = async (status: string) => {
    const result = await connection.raw(`
        SELECT * FROM TodoListTask WHERE status = "${status}"
    `)
    return result
}

// pegar task atrasada
export const delayedTask = async () => {
    const result = await connection.raw(`
        SELECT t.id as taskId, title, description, limit_date as limitDate, status, creator_user_id as creatorUserId, u.nickname as creatorUserNickName FROM TodoListTask t
        INNER JOIN TodoListUser u ON u.id = creator_user_id 
        `)
    return result
}

// pesquisar user 
export const searchUser = async (user: string) => {
    const result = await connection().select("*").from("TodoListUser").where("nickname", user)
    return result
}

export const searchTask = async (srch: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT TodoListTask.id, title, description, limit_date, status, creator_user_id, nickname FROM TodoListTask
    LEFT JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id WHERE TodoListTask.description like '%${srch}%' 
    OR TodoListTask.title like '%${srch}%'
    `)
    return result[0]
}
