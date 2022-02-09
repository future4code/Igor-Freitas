import express, {Response, Request, Express} from 'express'
import cors from 'cors'
import connection from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";
import { send } from 'process';

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


// 1
//  Query com raw devolve exatamente o que está no BDA

const searchActor = async (name:string): Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

app.get('/actor', async (req: Request, res:Response): Promise<void> =>{
    try{ 
        const name:any = req.query.name
        const result = await searchActor(name)
        res.status(200).send(result[0])
    }
    catch{

    }
}) 

// 2 E 4

const updateSalary = async (id: string, salary: number): Promise<any> =>{
    await connection('Actor')
    .update({
        salary: salary
    })
    .where('id', id)
}

app.put('/actor/update/:id', async (req: Request, res:Response): Promise<void> =>{
    try{
        const salary = req.body.salary
        const id = req.params.id
        await updateSalary(
            id,
            salary
        )
        res.status(200).send('Salário atualizado')
    } 
    catch{

    }
})
// 3 
const deleteActor = async (id: string): Promise<void> => {
    await connection('Actor')
      .delete()
      .where('id', id);
  }; 

app.delete('/actor/delete/:id', async (req: Request, res:Response)=>{
    try{
        const id:any = req.params
        await deleteActor(id)
        res.status(200).send('Ator Deletado')
    }
    catch{

    }
})

const countActors = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count
    return count
}

app.get('/actor/count', async (req: Request, res:Response)=>{
    try{
        const gender:any = req.query.gender
       const result = await countActors(gender)
        res.status(200).send(result.toString())
    } 
    catch(error: any){
        res.status(500).send(error.message)
    }
})


