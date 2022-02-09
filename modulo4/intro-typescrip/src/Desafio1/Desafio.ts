const num1:number = Number(process.argv[2])
const num2:number = Number(process.argv[3])
let comparation: number

function challange ():number[]{
  const sum = num1 + num2 
  const subtraction = num1 - num2
  const division = num1 / num2
  if(num1 > num2){
      comparation = num1
  } else{
      comparation = num2
  }
  return [sum, subtraction, division, comparation]
}