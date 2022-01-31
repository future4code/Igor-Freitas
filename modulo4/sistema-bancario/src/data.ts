

type Accounts = {
    cpf: string,
    name: string,
    birth: string,
    balance: number,
    statment: Transactions
    
}[]

 type Transactions = {
    description: string,
    date: string,
    value: number,
}[]

export const account: Accounts = [
    {
        cpf: '681-213-651-8',
        name: 'Rich',
        birth: '30-01-1997',
        balance: 15.68421,
        statment: []
    },
    {
        cpf: '632-223-255-8',
        name: 'Fábio',
        birth: '01-01-1850',
        balance: 99.68421,
        statment: []
    }           
]

