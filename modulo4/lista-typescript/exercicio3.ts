enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const nomeFilme:string = 'Duna'
const anoLancamento:number = 2021
let genero:GENERO = GENERO.ACAO
let pontuacao:number = 84

function filmeInfo(nomeFilme:string, anoLancamento:number, generoDoFilme:GENERO, pontuacao?:number):any{
	type infos ={
		name:string,
		ano:number,
		genero:GENERO,
		pontuacao?:number
	}
	if(pontuacao){
		const filme:infos ={
			name:nomeFilme,
			ano: anoLancamento,
			genero:generoDoFilme,
			pontuacao: pontuacao
		}
		console.log(filme)
	} else{
		const filme:infos ={
			name: nomeFilme,
			ano: anoLancamento,
			genero: generoDoFilme
		}
		console.log(filme)
	}
}
filmeInfo(nomeFilme, anoLancamento, genero, pontuacao)