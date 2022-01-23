const dataNascimento = process.argv[2];
const dataEmissao = process.argv[3];
const dataAtual = new Date();
let renovar = false;
const splitNasc = dataNascimento.split('/');
const splitEmissao = dataEmissao.split('/');
const arrayNasc = [
    Number(splitNasc[0]), Number(splitNasc[1]), Number(splitNasc[2])
];
const arrayEmissao = [
    Number(splitEmissao[0]), Number(splitEmissao[1]), Number(splitEmissao[2])
];
const arrayAtual = [
    dataAtual.getDate(), dataAtual.getMonth() + 1, dataAtual.getFullYear()
];
let idadeTotal = arrayAtual[2] - arrayNasc[2];
let carteiraTotal = arrayAtual[2] - arrayEmissao[2];
if (new Date(arrayAtual[2], arrayAtual[1], arrayAtual[0]) < new Date(arrayAtual[2], arrayNasc[1], arrayNasc[0])) {
    idadeTotal = idadeTotal - 1;
}
if (new Date(arrayAtual[2], arrayAtual[1], arrayAtual[0]) < new Date(arrayAtual[2], arrayEmissao[1], arrayEmissao[0])) {
    carteiraTotal = carteiraTotal - 1;
}
idadeTotal = idadeTotal < 0 ? 0 : idadeTotal;
carteiraTotal = carteiraTotal < 0 ? 0 : carteiraTotal;
if (idadeTotal <= 20) {
    if (carteiraTotal >= 5) {
        renovar = true;
    }
    else {
        renovar = false;
    }
}
else if (idadeTotal > 20 && idadeTotal <= 50) {
    if (carteiraTotal >= 10) {
        renovar = true;
    }
    else {
        renovar = false;
    }
}
else if (idadeTotal > 50) {
    if (carteiraTotal >= 15) {
        renovar = true;
    }
    else {
        renovar = false;
    }
}
console.log("idade da pessoa:", idadeTotal, "| ano carteira:", carteiraTotal, "| precisa renovar?", renovar);
//# sourceMappingURL=exercicio8.js.map