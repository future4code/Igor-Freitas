import connection from "../data/connection"
import {Request, Response} from 'express'

// CRIAR USER
export const createU = async (id: string, name: string, email: string, password: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO labecommerce_users (id, name, email, password)
    VALUES ('${Date.now()}', '${name}', '${email}', '${password}')
    `)
}

// PEGAR TODOS OS USERS
export const getAllU = async () => {
    const result = await connection().select('*').from('labecommerce_users')
    return result[0]
}

// CRIAR PRODUTOS
export const createProducts = async (id:string, name:string, price:number, imgURL:string ) => {
    await connection.raw(`
    INSERT INTO labecommerce_products (id, name, price, image_url)
    VALUES ('${Date.now()}', '${name.toUpperCase()}', '${price}', '${imgURL}')
    `)
}

// VER TODOS OS PRODUTOS
export const getAllP = async() =>{
    const result = await connection().select('*').from('labecommerce_products')
    return result
}

// COMPRAR 
export const purchaseProduct = async (userID:string, productID:string, quanty:number) =>{

    const selectUserID = await connection()
        .select('id')
        .from('labecommerce_users')
        .where('id', userID)

        const selectProductID = await connection()
        .select('id', 'price')
        .from('labecommerce_products')
        .where('id', productID)

        const total = selectProductID[0].price * quanty

        await connection.raw(`
        INSERT INTO labecommerce_purchases (id, user_id, product_id, quanty, total_price)
        VALUES ('${Date.now()}','${selectUserID[0].id}', '${selectProductID[0].id}', '${quanty}', '${total}')
        `)

}

// BUSCAR COMPRAS DE UM USUÁRIO
export const userPurchase =  async (userID:string) =>{
    const result = await connection()
    .select('*')
    .from('labecommerce_purchases')
    .where('user_id', userID)
    return result
}