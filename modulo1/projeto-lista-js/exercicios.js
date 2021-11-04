// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
soma(1,2)
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
imprimeMensagem()

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = Number(prompt("Digite a altura do retângulo:"))
 const largura = Number(prompt("Digite a altura do retângulo:"))
 console.log(altura * largura);
}
calculaAreaRetangulo()


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
 const anoAtual = +prompt ("Digite o ano atual")
  const anoDeNascimento = +prompt ("Digite o ano de nascimento")
 console.log(anoAtual - anoDeNascimento)
}
imprimeMensagem();
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}
calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nome = prompt ("Digite seu nome")
 const idade = prompt ("Digite sua idade")
 const email = prompt ("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor fatorita")
  const cor2 = prompt("Digite sua cor favorita")
  const cor3 = prompt("Digite sua cor favorita")
  array = [cor1, cor2, cor3]
  console.log(array)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiscula = string.toUpperCase()
  return maiscula;

}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  console.log(custo)
  console.log(valorIngresso)
  conta = (custo / valorIngresso)
  return conta
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  console.log(string1)
  console.log(string2)
  const comparacao = string1 >= string2
  return comparacao
}
console.log(comparacao)
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length - 1]
  return ultimo
}
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 const indiceUltimo = array.length - 1
 const primeiro = array[0]
 const ultimoElemento = array[indiceUltimo]
 
 array[0] = ultimoElemento
 array[indiceUltimo] = primeiro
 return array;
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 const checar = string1.toUpperCase() === string2.toUpperCase();
 return checar
 }

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}