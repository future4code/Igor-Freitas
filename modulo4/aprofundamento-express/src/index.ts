import { useRadioGroup } from "@mui/material";
import useId from "@mui/material/utils/useId";
import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const list = [
    {
        userId: 1,
        id: 2,
        title: 'Feito',
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: 'A fazer',
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: 'editors now use Lorem Ipsum as their default model text',
        completed: true
    },
    {
        userId: 3,
        id: 9,
        title: 'There are many variations of passages of Lorem Ipsum availabl',
        completed: true
    },
    {
        userId: 6,
        id: 15,
        title: 'variations of passages of Lorem Ipsum available',
        completed: true
    },
    {
        userId: 6,
        id: 4,
        title: 'Ipsum available',
        completed: false
    }
]

app.get('/list',(req, res)=>{
    const done = list.map((isTrue)=>{
        if(isTrue.completed === true){
            return isTrue
        }
    })
    res.status(200).send(done)
})

app.get('/list/user/:id',(req, res)=>{
   const userId = Number(req.params.id)
    const filter = list.filter((p)=>{
        return p.userId === userId
    })
   res.status(200).send(filter)
})

app.post('/list/create', (req, res)=>{
    const {title, completed } = req.body
    list.push({
        userId: Date.now(),
        id: list.length + 1,
        title,
        completed
    })
    res.status(200).send(list)
})

app.put('list/:id', (req, res)=>{
    const toChange = Number(req.params.id)
    list.map((change)=>{
        if(toChange === change.id){
            return change.completed = !change.completed
        }
        return list
    })
    res.status(200).send(list)
})

app.delete("/list/delete", (req, res) => {
    const id = Number(req.query.id)

    list.forEach((task, index) => {
        if(task.id === id) {
            return list.splice(index, 1)
        }
        return task
    })

    res.status(200).send(list)
})