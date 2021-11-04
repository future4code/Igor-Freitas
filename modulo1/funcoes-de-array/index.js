// INTERPRETAÇÃO // 
// 1 Os index com os nomes

//2.  Array com os nomes

//3. Laura, Mandi

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a 
 const nomeDosDogs = pets.map((pets)=> {
     return pets.nome
 })
 console.log(nomeDosDogs)

 //b
const racaSalsicha = pets.filter((pets)=>{
    return pets.raca === 'Salsicha'
})
console.log(racaSalsicha)

//c

const racaPoodle = (pets) =>{
    return pets.raca === 'Poodle'
}
const nomeDosPoodles = (pets) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
}
const mensagemPoodle = pets.filter(racaPoodle).map(nomeDosPoodles)
console.log(mensagemPoodle)

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a
 const arrayNomes = produtos.map((produtos)=>{
    return produtos.nome
 })
 console.log(arrayNomes)

 //b
 const novoPreco = produtos.map((array)=>{
    array.preco =(array.preco - (array.preco/100*5).toFixed(2))
    return array
})
console.log(novoPreco)


// c
const bebidas = produtos.filter((produtos)=>{
    return produtos.categoria ==='Bebidas'
})
console.log(bebidas)

//d
const produtosYpe = produtos.filter((produtos)=>{
    return produtos.nome.includes('Ypê')
})
console.log(produtosYpe)

//e

const soYpe = produtos.filter((produto)=>{
    return produto.nome.includes('Ypê')
})
const mensagemYpe =soYpe.map((valor)=>{
    return `Compre ${valor.nome} por ${valor.preco.toFixed(2)}`
})
console.log(mensagemYpe)


// DESAFIOS //
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

pokemons.sort(function(a,b){
    return a.nome - b.tipo
})
console.log(pokemons)
