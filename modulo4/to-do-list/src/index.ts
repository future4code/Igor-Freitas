
import express, { Express, Response, Request } from "express";
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

import { AddressInfo } from "net";
import { getUser, createUser, updateUser, tasks, getTask, getAllUsers, getTaskByUserId, searchUser, responsible } from "./functions";

const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`failure upon stargin server.`)
    }
})

let reqError = 0 // LET PARA TRATAMENTO DE ERRO 
// app.get('/ping', (req:Request, res:Response)=>{
//     res.send('Pong')
// })


// create user
app.post('/users', async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            reqError = 401
            res.status(reqError).send('Fill all the fields')
        }
        await createUser(name, nickname, email)

        res.status(200).send('Created')

    } catch (err: any) {
        reqError = 500
        res.status(reqError).send('Try again.')
    }

})

// pegar todos users
app.get('/user/all', async (req:Request, res:Response)=>{
    try{
        const result = await getAllUsers()
        res.status(200).send(result)
    } catch(err:any){
        res.status(500).send(err.message)
    } 
})



// editar user
app.put('/user/edit/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const { name, nickname } = req.body
        await updateUser(id, name, nickname)
        if (!name || !nickname) {
            reqError = 401
            res.status(reqError).send()
        }
        res.status(202).send('Completed')

    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// Add task
app.post('/task', async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        const dateLimit = limitDate.split("/")

        const limit = `${dateLimit[2]}/${dateLimit[1]}/${dateLimit[0]}` // DATA FORMATADA PRO MYSQL

        await tasks(title, description, limit, creatorUserId)

        if (!title || !description || !limitDate || !creatorUserId) {
            reqError = 401
            res.status(401).send('Fill all the fields')
        }
        res.status(201).send('Added task')
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})



// pegar task por id
app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const task = await getTask(id)

        if (!id) {
            reqError = 401
            res.status(reqError).send('Please, insert an ID')
        }
        if (task.length === 0) {
            reqError = 401
            res.status(401).send('Please, insert a valid ID')
        }
        res.status(200).send(task)
    } catch (err: any) {
        res.status(500).send('Try again')
    }
})


// pegar tarefas por id 
app.get('/task', async (req:Request, res:Response)=>{
       try{
        const creatorUseId = req.query.creatorUseId as string

        const result = await getTaskByUserId(creatorUseId)

        res.status(201).send(result)        
       } catch(err:any){
        res.status(500).send(err.message)
       }
})

// responstavel pela task
app.post('/task/responsible', async (req:Request, res:Response)=>{
    try{
        const user = req.body.user as string
        const result = await responsible(user)

        if(!user || user.length){
            reqError = 402
            res.status(reqError).send('Please, fill the fields')
        }
        res.status(201).send(result)
    } catch(err:any){
        res.status(500).send(err.message)
    }
})

// pesquisar user por ID
app.get('/user', async (req:Request, res:Response)=>{
    try{
        const user = req.body.user as string
        const result = await searchUser(user)
        if(!user){
            reqError = 402
            res.status(reqError).send(`User don't exist` )
        }
        if(result.length === 0){
            reqError = 404
            res.status(reqError).send([])
            
        }
        res.status(200).send(result)

    } catch(err:any){
        res.status(500).send(err.message)
    }
})


