const palavra: string = process.argv[2]
const slpitPalavra:Array<string> = palavra.split('')
let totalArray:number = slpitPalavra.length
let valorTotal:number = 1

while(totalArray !== 1){
    valorTotal = valorTotal * totalArray
    totalArray = totalArray - 1
}

console.log("O número total de anagramas da palavra é: ",valorTotal)