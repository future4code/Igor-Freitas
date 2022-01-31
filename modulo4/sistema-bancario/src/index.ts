import express, {Request, Response} from "express";
import { account } from "./data";
import { AddressInfo } from "net";


const app = express();

app.use(express.json());
let reqError = 400


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get('/',(req: Request, res: Response)=>{
    account.map((acc)=>{
        return acc
    })
    res.status(200).send(account)
})

app.get('/balance', (req: Request, res: Response)=>{
    try {
        const {cpf, name} = req.query

        if(!cpf || !name) { 
            reqError = 404
            throw new Error('Conta não encontrada, verifique dos dados.')
        }

        const search = account.filter((acc)=>{
            return acc.cpf === cpf && acc.name === name
         })

        if(search.length === 0){
            reqError = 404
            throw new Error('Usuário não encontrado')
        }

        res.status(200).send(search)
    }

    catch(error: any){
        res.status(reqError).send(error.message)
    }
})

app.put('/deposit', (req: Request, res: Response)=>{
    
    try{
        
        const {cpf, name, birth, balance} =  req.body

        if(!cpf || !name || !birth || !balance) {
            reqError = 404
            throw new Error('Conta não encontrada, verifique os dados.')
        }

        if(balance <= 0) {
            
             throw new Error ('O valor do deposito deve ser maior que 0')
            }

        account.forEach((acc)=>{
            if(acc.cpf === cpf){
               return acc.balance = acc.balance + balance
            }
        })

        res.send(account)

    } catch(error: any){
        res.status(reqError).send(error.message)
    }

})
app.post('/payment', (req: Request, res: Response)=>{

    try{
        const {cpf, paymentDate, paymentValue } = req.body
        if(!cpf){
            reqError = 404
            throw new Error('Conta não encontrada, verifique os dados')
        }
        if(paymentValue < 0){
            reqError = 402
            throw new Error('O pagamento mínimo é de R$ 1,00')
        }
        if(!paymentDate){
            res.status(200).send()
        }
        account.map((pay)=>{
            if(pay.cpf === cpf){
                return pay.balance - paymentValue
            }
        })
        
        res.send(account)
    }
    catch(error: any){
        res.status(reqError).send(error.message)
    }
})

app.post('/account/new', (req: Request, res: Response)=>{
    let reqError: number = 400
  try{
    const {cpf, name, birth} = req.body
     

    if(!cpf || !name || !birth) { throw new Error('Preencha os campos corretamente') }
    
    const [year, month, day] = birth.split('/')
    const actualDate: number = new Date().getTime()
    const userBirth: number = new Date(`${year}-{month}-${day}`).getTime()
    const age: number = (actualDate - userBirth) / 1000 / 60 / 60 / 24 / 365

    if(age < 18) {
        reqError = 401
        throw new Error('Para criar sua conta você deve ter mais de 18 anos')
    }
   account.map((verify)=>{
       reqError = 406
       if(verify.cpf === cpf){ throw new Error(' Já existe uma conta com esse CPF') }
   })
    account.push({
        cpf,
        name,
        birth,
        balance: 0,
        statment: []
    })
    res.status(200).send(account)
  }
  
  catch(error: any){
    res.status(reqError).send(error.message)
  }

})

