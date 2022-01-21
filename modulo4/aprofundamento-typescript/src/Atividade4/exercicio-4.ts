type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Para transcrever eu usaria tsc && node ./build/exercicio-4.ts.
//seria tsc ./build/exercicio-4.ts && node ./build/2.ts.
//Criando vários arquivos numa pasta e colocando os nomes, um seguido do outro. Exemplo: tsc exercicio-4.ts exercicio-5.ts exercicio-6.ts,
// usando apenas usando o tsc sem paramentros.