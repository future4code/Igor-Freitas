// 1
// a
type StrOrNum = string | number

const string:StrOrNum  = 123


// b
const number:StrOrNum  = 'Para aceitar usar o tipo any'


enum Colors{
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:Colors
}

const pessoa:Pessoa = {
    nome: 'Igor',
    idade: 50,
    corFavorita: Colors.VERDE
}
const pessoa2:Pessoa ={
    nome: 'PH',
    idade: 50,
    corFavorita: Colors.VERMELHO
}
const pessoa3:Pessoa = {
    nome: 'Marcelo',
    idade: 50,
    corFavorita: Colors.LARANJA
}





