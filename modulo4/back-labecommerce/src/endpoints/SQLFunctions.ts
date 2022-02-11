import connection from "../data/connection";

// CRIAR USER
export const createU = async (id: string, name: string, email: string, password: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO labecommerce_users (id, name, email, password)
    VALUES ("${Date.now()}", "${name}", "${email}", "${password}")
    `)
}

// PEGAR TODOS OS USERS
export const getAllU = async () => {
    const result = await connection().select('*').from('labecommerce_users')
    return result
}