
import express, { Express, Response, Request } from "express";
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

import { AddressInfo } from "net";
import { getUser, createUser, updateUser, tasks, getTask } from "./functions";

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

// pegar user
app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const user = await getUser(id)

        if (user.length === 0) {
            reqError = 404
            res.status(reqError).send(`User aren't found`)
        }
        res.status(200).send(user)
    } catch (err: any) {
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
        res.status(201).send('Completed')

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
        res.status(200).send('Added task')
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