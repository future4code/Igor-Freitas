function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contar = 0
  if(arrayDeNumeros.includes(numeroEscolhido)){
    for(let number of arrayDeNumeros){
      if(number === numeroEscolhido){
        contar += 1 
      }
    }
    return `O número ${numeroEscolhido} aparece ${contar}x`
  } else {
    
    return `Número não encontrado`
    
  }
}