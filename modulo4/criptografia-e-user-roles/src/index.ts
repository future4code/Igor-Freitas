import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { ping } from "./endpoints/ping";
import { HashManager } from "./services/genHash";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



app.get('/ping', ping)

app.post('/user/signup', createUser)


const cyhperText = new HashManager().createHash('Igor')
console.log('cryp', cyhperText)