import express from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'

export const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log('Servidor rodando')
    } else {
        console.log('Falha ao iniciar o servidor')
    }
})

