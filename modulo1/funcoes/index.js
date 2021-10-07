
// 1- LEITURA EM ORDEM
// 10 50
// 50

// 2 - LEITURA
//Ela vai retornar o texto todo em minusculo, e retornar true ou false se houver cenoura no texto.
//TRUE TRUE TRUE

//ESCRITA 1 EM ORDEM
function sobre (){
    const eu = "Eu sou Igor, tenho 24 anos, moro em Brasília e sou estudante";
    return eu;

}
sobre();



function quatroParamentros (nome,idade,cidade,moro,profissao){
    nome = "Igor";
    idade = 24;
    cidade = "Brasília";
    moro = "Jardim Botânico";
    profissao = "estatística do desemprego";
    return console.log("Eu sou",nome, ", tenho",idade,"anos, moro em",cidade,"e sou", profissao);
    
}
quatroParamentros();


// ESCRITA 2 EM ORDEM

function somar(n1,n2){
 n1 = 15;
 n2 = 15;
 return n1 + n2;
}
somar();


function maiorMenor(numero1,numero2){
    numero1 = 1;
    numero2 = 2;
    numero1 >= numero2;
    return console.log(numero1 >= numero2);

}
maiorMenor();


function par(num1){
    num1 = 1;
    resp = num1%2 == 0;
    console.log(resp);
}
par();


function recebedor(mensagem){
     mensagem = prompt ("Digite uma mensagem");
    console.log(mensagem.toUpperCase())
    tamanho = mensagem.length;
    console.log(tamanho);
    
    
}
recebedor();


function usuario(numb1,numb2){
    numb1 = +prompt ("Digite o primeiro numero");
    numb2 = +prompt ("Digite o segundo numero");
    console.log("Numeros inseridos:",numb1,numb2);
    console.log("Soma:",numb1 + numb2);
    console.log("Diferença:",numb1 % numb2);
    console.log("Multiplicação:",numb1 * numb2);
    console.log("Divisão:",numb1 / numb2);
    

}
usuario();



// DESAFIO

const flexa = () => {
    const parametro = +prompt("Digite um numero");
    return parametro;
}
const resultado = flexa()
console.log(resultado);


function teoremadePitagoras(a,b){
    let hipotenusa = (a ** 2) + (b ** 2);
    let hip =  hipotenusa**(1/2);
    return hip;
    
}
teoremadePitagoras(30,15);
//VOU FICAR DEVENDO O SEGUNDO DESAFIO KKKKK NÃO ESTOU 100% HOJE
///