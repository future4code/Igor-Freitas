// a. Usando o process.argv

// b.
const userName = process.argv[2]
const yearsOld = Number(process.argv[3])

const message = `Olá ${userName}, Você têm ${yearsOld} anos`

console.log(message)


// 
const sumYears = yearsOld + 7
const sumMessage = `Olá ${userName}, Você têm ${yearsOld} anos. E em sete anos você terá ${sumYears}.`
console.log(sumMessage)
