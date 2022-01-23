const palavra: string = process.argv[2]
const splitPalavra:Array<string> = palavra.split('')
let lengthArray:number = splitPalavra.length
let valorTotal:number = 1

while(lengthArray !== 1){
    valorTotal = valorTotal * lengthArray
    lengthArray = lengthArray - 1
}

console.log("O número total de anagramas da palavra é: ",valorTotal)