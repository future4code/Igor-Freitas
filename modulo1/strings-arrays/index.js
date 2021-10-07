// RESPOSTA ATIVIDADE 1
// a. array não indefinida
// b. array nula
// c. 13
// d. arry  não definida
// e. 3,19,5,6,7,8,9,10,11,12,13
// f. array não definda;


// RESPOSTA ATIVIDADE 2
// SUBI NO ONIBUS EM MIRROCOS



alert("ESCRITA 1");
const nomeDoUsuario = prompt("Digite o nome do usuário");
const emailDoUsuario = prompt ("Digite seu e-mail");
console.log(emailDoUsuario,"Foi cadastrado com sucesso. Seja bem vindo(a)", nomeDoUsuario);


alert("ESCRITA 2");
 comidas = [`Arroz`,`Feijão`,`Salada`,`Macarrão`,`Carne`];
 console.log(comidas);
 console.log(`Essas são minhas comidas preferidas:
 ${comidas[0]}
 ${comidas[1]}
 ${comidas[2]}
 ${comidas[3]}
`);

const novaComida = prompt ("Digite uma comida");
comidas[1] = novaComida;
console.log(comidas);


alert("ESCRITA 3");
const pergunta1 = prompt ("Digite a primeira tarefa");
const pergunta2 = prompt ("Digite a segunda tarefa");
const pergunta3 = prompt ("Digite a terceira tarefa");
const vazio =[];
const listaDeTarefas = vazio;
listaDeTarefas.push(pergunta1);
listaDeTarefas.push(pergunta2);
listaDeTarefas.push(pergunta3);
console.log(vazio);
 
const pergunta4 = prompt("Qual tarefa você já realizou 0, 1 ou 2?");
listaDeTarefas.splice(pergunta4, 1);
console.log(vazio);



alert("DESAFIO 1");
const frase = prompt ("DIGITE UMA FRASE");
const array = frase.split(" ");
console.log(array);

alert("DESAFIO 2");
const desafio = ["Banana","Morango", "Abacaxi", "Laranja","Ameixa"];
const r = desafio.slice(2, -2);
console.log(r);
