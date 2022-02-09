import express, { Request, Response } from "express"
import { AddressInfo } from "net"
import { shoes, Products } from './data'

const app = express()
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando em http://localhost:${address.port} 🟢`)
    } else {
        console.log(`Falha ao Iniciar o servidor 🔴`)
    }
})
// 1
app.get('/test', (req, res) => {
    res.status(200).send('API ON  🟢')
})
//  4 
app.get('/shoes', (req, res) => {
    const allShoes = shoes.map((item) => {
        return item
    })
    res.status(200).send(allShoes)
})


// 3 e 7
app.post('/shoes/new', (req: Request, res: Response) => {
    try {
        const { productName, price } = req.body
        const userIdToAdd = req.headers.authorization

        if (!userIdToAdd) { throw new Error('Header de authorization não informado') }

        if (price <= 0) { throw new Error('O preço não pode ser 0 ou menor') }

        if (!productName || !price || !productName && !price) { throw new Error(`Preencha todos os campos`) }

        if (typeof (price) !== typeof (0)) { throw new Error('O preço informado deve ser um número') }

        shoes.push({
            id: Date.now().toString(),
            productName,
            price
        })

    }
    catch (error: any) {
        switch (error.message) {
            case 'Preencha todos os campos':
                res.status(422)
                break
            case 'Header de authorization não informado':
                res.status(401)
                break
            case 'O preço informado deve ser um número':
                res.status(401)
                break
            case 'O preço não pode ser 0 ou menor':
                res.status(401)
                break
            default:
                res.status(500)
        }
        res.status(200).send(shoes)
    }
})
// 5 e 8
app.put('/shoes/edit/:id', (req, res) => {
    try {
        const shoesId = req.params.id
        const newPrice: number = req.body.newPrice

        if (newPrice <= 0) { throw new Error('O preço informado deve ser maior que 0') }

        if (!newPrice) { throw new Error('Preencha o campo de preço') }

        if (typeof (newPrice) !== typeof (0)) { throw new Error('O preço deve ser um número') }

        shoes.map((item) => {
            if (item.id == shoesId) {
                item.price = newPrice
            } else {
                throw new Error('Produto não encontrado')
            }
        })
        res.send(shoes)
    }
    catch(error: any){
        switch(error.message){
            case 'O preço informado deve ser um número':
                res.status(402)
                break
            case 'Preencha o campo de preço':
                res.status(400)
                break
            case 'O preço informado deve ser maior que zero':
                res.status(401)
                break
            case 'Produto não encontrado':
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// 6 e 9
app.delete('/delete/:id', (req, res) => {
   try{
    const id = (req.params.id)
    shoes.forEach((item, index) => {
        if (item.id === id) {
            return shoes.splice(index, 1)
        } else {
            throw new Error('Produto não encontrado')
        }
        
    })
    res.send(shoes)
   }
   catch(error: any){
       switch(error.message){
           case 'Produto não encontrado':
               res.status(404)
               break
            default:
                res.status(500)
       }
       res.send(error.message)
   }
})