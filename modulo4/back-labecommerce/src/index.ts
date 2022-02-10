import { app } from "./app";
import { createUser } from "./endpoints/CreateUser";
import {getAllUsers} from './endpoints/GetAllUsers'

app.post('/users', createUser)
app.get('/users', getAllUsers)