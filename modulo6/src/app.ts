import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import Dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors())

Dotenv.config()

const server = app.listen(process.env.PORT , () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

export default app 