//  1 - Interpretação de código
// a. Matheus Nachtergaele,  Virgina Canvendish, Globo horário 14h



//  2 - Interpretação de código
//a. Juca, 3, srd, 
//Juba, 3, srd
// Jubo, 3, srd
//b. Os três pontos vão herdar os valores das chaves que já existem.

//  3 - Interpretação de código
// a. False
// b. A função puxou de pessoa o backender, que no objeto pessoa está como false e retornou fasle.
// Já quando pediu pra retornar a altura deu indefinido por não existir altura no objeto. 
//Não sei se estou certo.

// Exercícios de escrita de código em ordem
//1

const pessoa = {
    nome: 'Igor',
    apelido: ['WWW', 'ABC', 'xD']
}
function retorno(){
 const retorno = pessoa.nome;
 const retorno1 = pessoa.apelido;
 console.log(`Eu sou ${retorno}, pode me chamar de: ${retorno1}`);
}
pessoa.apelido[3] = 'Zeca Urubu'
pessoa.apelido[4] = 'Jimmy Neutron'
pessoa.apelido[5] = 'Papai Noel'
retorno();



// 2

const array =[];
array.push({Nome:'Pitaya',  disponibilidade: true })
array.push({Nome:'Tamara',  disponibilidade: true })
array.push({Nome:'Lichia',  disponibilidade: true })
console.log(array)
// desafio 3
array.disponibilidade= false


// Desafios

// function objeto(){
//     const nome = prompt('Qual seu nome?')
//     const idade = prompt('Qual sua idade?')
//     const profissao = prompt('Qual sua profissão?')
//    return console.log(`Nome: ${nome}, profissão: ${profissao}, idade: ${idade}`)
    
// }
// objeto()

function filmes(f1,d1,f2,d2){
    f1 = 'Anjos da Lei'
    d1 = 2012
    
    f2 = 'O homem que desafiou o diabo'
    d2 = 2007

    lancamento = d1 < d2
    lancamento1 = d1 > d2
    return console.log(`O filme ${f1} foi lançado antes do segundo? ${lancamento}
    O filme ${f2}, foi lançado no mesmo ano do ${f1}? ${lancamento1}`)
}
filmes()

