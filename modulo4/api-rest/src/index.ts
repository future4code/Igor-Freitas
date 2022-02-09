import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'
import { users } from './data'

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3001, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando em http:/localhost:${address.port}`)
    } else {
        console.log(`Falha ao iniciar o serv`)
    }
})

// 1
// Get para pegar todos os users
// "/users"


// 2 usando a função de Type do TS
// Tratamento de erro
app.get('/users', (req: Request, res: Response) => {
    try {
        users.map((u) => {
            return u
        })
    } catch (err: any) {
        res.status(400).send(err)
    }
    res.status(200).send(users)
})

// 3
// O query
// B está no if e no catch

app.get('/users/search', (req: Request, res: Response) => {
    try {
        const name = req.query.name

        if (!name) {
            throw new Error('O campo nome ou e-mail não podem ficar em branco')
        }

        const search = users.filter((s) => {
            return s.name === name
        })

        if (search.length === 0) {
            throw new Error('Usuário não encontrado')
        }
        res.status(200).send(search)
    }

    catch (error: any) {
        switch (error.message) {
            case 'Usuário não encontrado':
                res.status(404)
        }
    }
})

// 4 


app.post('/users/add', (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) {
            throw new Error('Preencha todos os campos')
        } 

        users.push({
            id: users.length + 1,
            name,
            email,
            type,
            age
        })
        res.status(200).send(users)

    }
    catch (error: any) {
        res.status(400).send(error)
    }
})