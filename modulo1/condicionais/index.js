// INTERPRETAÇÃO 
// 1
// a. Ele pede pro usuário escolher um número e teste o número pra saber se o resto da divisão é 0
// b. Para números que o resto da divisão seja 0
// c. Quando o resto da divisão não for 0

// 2
// a. O código é para o modo caso, caso x faça y.
// b. O valor será de 2.25
// c. O preço da pêra iria pra 5 reais.

// 3
// a. Pedindo o usuário um número.
// b. Com o número 10 ele passaria no teste, com o -10 ele diria que a mensagem é secreta.
// c. Dirá que mensagem não está definida, pois mensagem está fora do if.


// ESCRITA DE CÓDIGO
// 1
// const idade = +prompt('Digite sua idade');
// if (idade >= 18) {
//     console.log('Você pode dirigir');
// } else {
//     console.log('Não pode dirigir');
// }


// 2
// const turno = prompt('Qual turno você estuda? M, V ou N?');
// if (turno === 'M') {
//     console.log('Bom dia!');
// } else if (turno === 'V') {
//     console.log('Boa Tarde!');
// } else if (turno === 'N') {
//     console.log('Boa Noite!');
// }

// 3
// const turno = prompt('Qual turno você estuda? M, V ou N?');
// switch (turno) {
//     case 'M':
//         console.log('Bom dia!');
//         break;
//     case 'V':
//         console.log('Bom Tarde!');
//         break;
//     case 'N':
//         console.log('Boa Noite!');
//         break;
//     default:
//         console.log('Digite V para vespertino, M, para manhã e N para noite');
// }

//4 

// const filme = prompt('Qual gênero de filme você quer assistir?');
// const ingresso = +prompt('Digite o valor que quer pagar');
// const lanchinho = prompt('Digite o lanchinho que vai querer kk'); // DESAFIO 1
//     if(filme === 'Fantasia' && ingresso >= 15){
//         console.log('Bom filme');
//         console.log(`Aproveite o seu ${lanchinho}`) //DESAFIO 1
//     } else {
//         console.log('Escolha outro filme:(')
//     }



// DESAFIO 2
const nome = prompt('Digite seu nome');
console.log(`Nome do cliente: ${nome}`);

switch (TipoDeJogo = prompt('Digite o tipo de jogo. Nacional ou Internacional?')) {
    case 'Nacional':
        console.log('Tipo de jogo: Internacional');
        break;
    case 'Internacional':
        console.log('Tipo de jogo: Internacional');
        break;
    default: console.log('Escolha o jogo Nacional ou Internacional');

}

switch (etapa = prompt('Digite a tepada do jogo, SF, DT ou FI?')) {
    case 'SF':
        console.log('Etapa do jogo: Semifinal');
        break;
    case 'DT':
        console.log('Etapa do jogo: Decisão do 3° lugar');
        break;
    case 'FI':
        console.log('Etapa do jogo: Final')
}

switch (categoria = +prompt('Digite a categoria. 1,2,3 ou 4?')) {
    case 1:
        console.log('Categoria: 1');
        break;
    case 2:
        console.log('Categoria: 2');
        break;
    case 3:
        console.log('Categoria: 3');
        break;
    case 4:
        console.log('Categoria: 4');
        break;
    default: console.log('Escolha entre a categoria 1,2,3 ou 4');

}

if (categoria == 1 && etapa === 'SF') {
    const valor = 1320
    const ingressos = +prompt('Digite quantos ingressos deseja');
    const compraTotal = ingressos * valor;
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 1980`)
    console.log(`Valor total: ${compraTotal}`)
} else if (categoria == 2 && etapa === 'SF') {
    const valor = 880
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 880`)
    console.log(`Valor total: ${compraTotal}`)
} else if (categoria == 4 && etapa === 'SF') {
    const valor = 220
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 220`)
    console.log(`Valor total: ${compraTotal}`)
}


//////////////// CASO DT


if (categoria == 1 && etapa === 'DT') {
    const valor = 660
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 440`)
    console.log(`Valor total: ${compraTotal}`)
} else if (categoria == 2 && etapa === 'DT') {
    const valor = 440
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 440`)
    console.log(`Valor total: ${compraTotal}`)
} else if (categoria == 4 && etapa === 'DT') {
    const valor = 170
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 170`)
    console.log(`Valor total: ${compraTotal}`)
}

//////////////////////////////// CAS1980

if (categoria == 1 && etapa === 'FI') {
    const valor = 1980
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 1980`)
    console.log(`Valor total: ${compraTotal}`)
} else if (categoria == 2 && etapa === 'FI') {
    const valor = 1320
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 1320`)
    console.log(`Valor total: ${compraTotal}`)
} else if (categoria == 4 && etapa === 'FI') {
    const valor = 330
    const ingressos = +prompt('Digite quantos ingressos deseja');
    console.log(`Quantidade de ingressos:  ${ingressos}`)
    const compraTotal = ingressos * valor;
    console.log('--- VALORES ---');
    console.log(`Valor do ingresso: R$ 330`)
    console.log(`Valor total: ${compraTotal}`)
}