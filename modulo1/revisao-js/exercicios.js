// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}
array([3, 2, 1, 4, 7])

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
array([8, 23, 16, 10])

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b)
    return array
}
retornaArrayOrdenado([36, 12, 56, 7, 3])
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const npares = array.filter((item) => {
        return item % 2 === 0
    })
    return npares
}
retornaNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])

// EXERCÍCIO 05
const array = [1, 2, 3, 4, 5, 6]
function retornaNumerosParesElevadosADois(array) {
    const arraypPar = []
    let i = 0
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            let numeroPar = array[i]
            arraypPar.push(numeroPar * numeroPar)
        }
        i++
    }
    return arraypPar
}
console.log(retornaNumerosParesElevadosADois(array))


// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
    while (i < array.length) {
        if (array[i] > maior) {
            maior = array[i]
        }
        i++
    }
    return maior
}
retornaMaiorNumero([1, 2, 3, 4, 5, 6, 7])
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    let maiorDivisivelPorMenor = maiorNumero%menorNumero === 0
    let diferenca = maiorNumero - menorNumero
    return { maiorNumero, maiorDivisivelPorMenor, diferenca}
}   


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0
    const array = []
    let par = 0
    while(i < n ) {
        array.push(par)
        par = par + 2
        i++
    }
    return array
}
const n = 5
console.log(retornaNPrimeirosPares(n))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}