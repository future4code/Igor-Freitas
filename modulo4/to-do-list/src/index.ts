import { connection } from "./connection";
import express, { Express, Response, Request } from "express";
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

import { AddressInfo } from "net";
import { send } from "process";
import { getUnit } from "@mui/material/styles/cssUtils";
import { getUser } from "./functions";

const server = app.listen(process.env.PORT || 3006, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else{
        console.error(`failure upon stargin server.`)
    }
})

let reqError = 0 // LET PARA TRATAMENTO DE ERRO 

// create user
app.post('/users', async(req:Request, res:Response)=>{
    try{
        const {name, username, email} = req.body
        
        if(!name || !username || !email){
            reqError = 401
            res.status(reqError).send('.')
        }
        
    } catch(err:any){
        reqError = 500
        res.status(reqError).send('Try again.')
    }
})

// pegar user
app.get('/user/:id', async (req:Request, res:Response)=>{
    try{
        const id:string = req.params.id
        const user = await getUser(id)

        if(user.lenght === 0){
            reqError = 404
            res.status(reqError).send(`User aren't found`)
        }
        res.status(200).send(user)
    } catch(err:any){
        res.status(500).send(err.message)
    }
    
})
// editar user
app.put('user/edit/:id', async (req:Request, res:Response)=>{
    try{
        const id:string = req.params.id
        const {name, nickname} = req.body
        
        if(!name || !nickname){
            reqError = 401
            res.status(reqError).send()
        }
        res.status(201).send('Completed')

    } catch(err:any){
        res.status(500).send(err.message)
    }
})