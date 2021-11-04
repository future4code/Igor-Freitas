 function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if(quantidade <= 5){
    let preco = 1.30
    return preco * quantidade
  } else if (quantidade >= 12){
    let preco = 1.00
    return quantidade * preco
  }
}
calculaPrecoTotal(5)