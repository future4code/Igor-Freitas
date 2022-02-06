import express, { Express, Response, Request } from "express";
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

import { AddressInfo } from "net";

import {
    createUser,
    updateUser,
    tasks,
    getTask,
    getAllUsers,
    getTaskByUserId,
    searchUser,
    responsible,
    getResponsibleUser,
    getTaskByID,
    attTask,
    getTaskByStatus,
    delayedTask,
    searchTask,
} from "./functions";


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
app.get('/user/all', async (req: Request, res: Response) => {
    try {
        const result = await getAllUsers()
        if (result.length === 0) {
            reqError = 404
            res.status(reqError).send('Zero users on Database')
        }
        res.status(200).send(result)
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
app.get('/task', async (req: Request, res: Response) => {
    try {
        const creatorUseId = req.query.creatorUseId as string

        const result = await getTaskByUserId(creatorUseId)

        res.status(201).send(result)
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// responstavel pela task 9 e 16
app.post('/task/responsible', async (req: Request, res: Response) => {
    try {
        const { taskID, responsibleUserID } = req.body
        await responsible(taskID, responsibleUserID)

        if (!taskID || taskID.length === 0 || !responsibleUserID) {
            reqError = 402
            res.status(reqError).send('Please, fill the fields')
        }

        for (let i of responsibleUserID) {
            let responsible_user_id = i
            await connection('TodoListResponsibleUserTaskRelation').insert({ taskID, responsible_user_id })
        }

        res.status(201).send('Success')
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// pesquisar user por ID
app.get('/user', async (req: Request, res: Response) => {
    try {
        const user = req.body.user as string
        const result = await searchUser(user)
        if (!user) {
            reqError = 402
            res.status(reqError).send(`User don't exist`)
        }
        if (result.length === 0) {
            reqError = 404
            res.status(reqError).send([])

        }
        res.status(200).send(result)

    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// pegar user responsavel pela task

app.get('/task/:id/responsible', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await getResponsibleUser(id)

        if (!id || id.length === 0) {
            reqError = 401
            res.status(reqError).send('Please, choose a valid ID')
        }
        res.status(201).send(result)

    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// pegar task por ID

app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await getTaskByID(id)
        if (!id) {
            reqError = 401
            res.status(reqError).send('Please, choose a valid ID')
        }
        res.status(201).send(result)
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// att status da task
app.put('/task/status/:id/', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await attTask(id)
        if (!id) {
            reqError = 402
            res.status(reqError).send('Please, put a valid ID')
        }
        res.status(201).send('Changed')
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

// pegar task por status
app.get('/tasks/check', async (req: Request, res: Response) => {
    try {
        const status = req.query.status as string
        const result = await getTaskByStatus(status)

        if (!status) {
            reqError = 402
            res.status(reqError).send('Please, write doing or to_do')
        }
        res.status(201).send(result[0])

    } catch (err: any) {
        res.status(500).send(err.message)
    }

})

// pegar task atrasada
app.get('/tasks/delayed', async (req: Request, res: Response) => {
    try {
        const result = await delayedTask()
        let date = new Date().getTime()
        const filter = result[0].filter((d: any) => {
            let datefilter = d.limitDate.getTime()
            if (date < datefilter) {
                return d
            }
        })
        res.status(200).send(filter)
    } catch (err: any) {
        res.status(500).send(err.message)

    }
})

// deletar responsavel
import { connection } from './connection'

app.delete('/task/delete/:taskID/responsible/:responsibleUserId', async (req: Request, res: Response) => {
    try {
        const { taskID, responsibleUserId } = req.params
        if (!taskID || !responsibleUserId) {
            reqError = 404
            res.status(reqError).send('Please, check the fields')
        }

        const taskToRemove = await connection()
            .select("task_id")
            .from("TodoListResponsibleUserTaskRelation")
            .where("responsible_user_id", responsibleUserId)

        if (taskToRemove.length === 0) {
            reqError = 404
            res.status(reqError).send('Not found any task with this ID')
        }
        const userToRemove = await connection()
            .select("responsible_user_id")
            .from("TodoListResponsibleUserTaskRelation")
            .where("responsible_user_id", responsibleUserId)

        if (userToRemove.length === 0) {
            reqError = 404
            res.status(reqError).send(`Don't have users to delete`)
        }

        await connection.raw(`
        DELETE FROM TodoListResponsibleUserTaskRelation 
        WHERE task_id = "${taskToRemove[0].task_id}" AND responsible_user_id = "${userToRemove[0].responsible_user_id}"
    `)
        res.status(201).send('Removed from responsible')
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

app.get('/tasks/search', async (req:Request, res:Response)=>{
    try{
        const srch = req.query.srch as string
        const result = await searchTask(srch)

        if(!srch){
            reqError = 401
            res.status(reqError).send('Please, fill the field')
        }
        if(result.length=== 0){
            reqError = 404
            res.status(reqError).send('Task not found')
        }
        res.status(201).send(result)
    } catch(err:any){
        res.status(500).send(err.message)

    }
}) 