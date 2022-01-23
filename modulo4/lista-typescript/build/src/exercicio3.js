var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const nomeFilme = 'Duna';
const anoLancamento = 2021;
let genero = GENERO.ACAO;
let pontuacao = 84;
function filmeInfo(nomeFilme, anoLancamento, generoDoFilme, pontuacao) {
    if (pontuacao) {
        const filme = {
            name: nomeFilme,
            ano: anoLancamento,
            genero: generoDoFilme,
            pontuacao: pontuacao
        };
        console.log(filme);
    }
    else {
        const filme = {
            name: nomeFilme,
            ano: anoLancamento,
            genero: generoDoFilme
        };
        console.log(filme);
    }
}
filmeInfo(nomeFilme, anoLancamento, genero, pontuacao);
//# sourceMappingURL=exercicio3.js.map