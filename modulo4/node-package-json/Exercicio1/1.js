// a. Usando o process.argv

// b.
let red, purple, reset;
red   = '\u001b[31m';
purple  = '\u001b[34m';
reset = '\u001b[0m';

const userName = process.argv[2]
const yearsOld = Number(process.argv[3])
const message = `Olá ${userName}, Você têm ${yearsOld} anos`

if(userName && yearsOld ){
    console.log(purple + message)
} else{
    console.log(red + 'Esperava-se 2 parametros e só foi recebido um')
}






// 
const sumYears = yearsOld + 7
const sumMessage = `Olá ${userName}, Você têm ${yearsOld} anos. E em sete anos você terá ${sumYears}.`
if(sumYears && sumMessage ){
    console.log(purple + sumMessage)
} else{
    console.log(red + 'Esperava-se 2 parametros e só foi recebido 1')
}
