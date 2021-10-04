var nome;
var idade;
typeof nome,idade;
// SERÁ INDEFINIDO E/OU NULA POIS A VARIÁVEL NÃO FOI DEFINIDA.


var nome = prompt ("Digite seu nome");
var idade = prompt ("Digite sua idade");
console.log('Olá,',nome, 'você tem', idade, 'anos');
console.log(typeof nome);
console.log(typeof idade);

var perg1 = prompt ("Você está usando roupa azul?");
var perg2 = prompt ("Você está usando roupa preta?");
var perg3 = prompt ("Você está usando roupa vermelha?");
console.log("Você está usando roupa azul?", perg1)
console.log("Você está usando roupa preta?", perg2)
console.log("Você está usando roupa vemelha?", perg3)



let a = 10
let b = 25
let c = a

a = b;
b = c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


// DESAFIO
console.log('--------------DESAFIO----------')
var st1 = 2;
var st2 = 10;
console.log(st1, '+', st2, '=', st1 * st2);

console.log(st1, '*', st2, '=',st1 * st2);




