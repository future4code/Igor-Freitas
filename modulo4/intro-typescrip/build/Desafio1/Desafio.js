"use strict";
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
let comparation;
function challange() {
    const sum = num1 + num2;
    const subtraction = num1 - num2;
    const division = num1 / num2;
    if (num1 > num2) {
        comparation = num1;
    }
    else {
        comparation = num2;
    }
    return [sum, subtraction, division, comparation];
}
//# sourceMappingURL=Desafio.js.map