var SETORES;
(function (SETORES) {
    SETORES["MARKETING"] = "marketing";
    SETORES["VENDAS"] = "vendas";
    SETORES["FINANCEIRO"] = "financeiro";
})(SETORES || (SETORES = {}));
const colaboradores = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
];
function filtrando(array) {
    const novoArray = array.filter((pessoa) => pessoa.setor === "marketing" && pessoa.presencial === true);
    console.log(novoArray);
}
filtrando(colaboradores);
//# sourceMappingURL=exercicio4.js.map