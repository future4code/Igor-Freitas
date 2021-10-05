
//  BOOL1 && BOOL2 = FALSE
//  BOOL1 && BOOL2 && BOOL3 = FALSE
//  !RESULTADO && (BOOL1 || BOOL2) = TRUE

//------------------------------------------------------------

// Diria para ele colocar o +prompt ou parseInt:
// let primeiroNumero = parseInt(prompt("Digite um numero"));
// let segundoNumero = parseInt(prompt("Digite um numero"));
// console.log(primeiroNumero + segundoNumero);
// ou assim
// let primeiroNumero = +prompt("Digite o primeiro numero");
// let segundoNumero = +prompt("Digite o segundo numero");
// console.log(primeiroNumero + segundoNumero);
//-------------------------------------------------------------

    alert("ESCRITA 1");
    let idade1 = +prompt("Amigo digite sua idade");
    let idade2 = +prompt("Amiga digite sua idade");
    let r = idade1 > idade2;
    console.log(r);
    console.log("A diferença de idade é de:", idade1 - idade2);


    alert("ESCRITA 2");
    let npar = +prompt("Digite um numero par");
    res = npar % 2;
    console.log("O resto de", npar, "dividido por 2 é:", res);


    alert("ESCRITA 3");
    let idade = +prompt("Digite sua idade");
    let respm = idade * 12;
    let respd = idade * 365;
    let resph = idade * 8760;
    console.log("Sua idade em meses é:", respm,"meses");
    console.log("Sua idade em dias é:", respd,"dias");
    console.log("Sua idade em horas é:", resph,"horas");


    alert("ESCRITA 4");
    let numb1 = +prompt("Digite o primeiro numero");
    let numb2 = +prompt("Digite o segundo numero");
    let resp1= numb1 > numb2;
    let resp2= numb1 == numb2;
    let resp3= numb1 % numb2 == 0;
    let resp4= numb2 % numb1 == 0;
    console.log("O primeiro é maior que o segundo? -", resp1);
    console.log("O primeiro é igual ao segundo? -", resp2);
    console.log("O primeiro é divisivel pelo segundo? -",resp3);
    console.log("O segundo é divisivel pelo terceiro? -",resp4);


    alert("DESAFIO 1");
    let f = 77;
    let c = 80;
    let c1 =30
    let k = 77;
    let respf = (f -32) * (5/9) + 273.15;
    let respc = c * (9/5) +32;
    let respck = c1 * (9/5) +32;
    let respck1 = c1 + 273.15;
    console.log("77°F em K é:",respf,"K")
    console.log("80°C em F é:",respc,"F")
    console.log("30°C em F é",respck, "e 30°C em K é:", respck1);

    let convert = +prompt("TEMPERATURA DE °C PARA F E K");
    console.log((convert -32) * (5/9) + 273.15, "EM KELVIN")
    console.log( convert * (9/5) +32, "EM FAHRENHEIT");


    alert("DESAFIO 2");
    let qlw = 280;
    let qlwr = qlw * 0.5;
    console.log(qlwr,"reais será pago por 280 Quilowatt-hora.");

    let qntqlw = +prompt("Quantoswatt-hora?")
    let rqlw = qntqlw * 0.5;
    let pqlw = (rqlw * 15) /100;
    console.log("Valor integral:", rqlw);
    console.log("Desconto de 15% é:",pqlw, "o total a pagar é:", rqlw - pqlw);


    alert("DESAFIO 3")
    lb = 20;
    convert = lb / 2.205;
    console.log("20 LB em KG é",convert,"KG");

    oz = 10.5;
    convert1 = oz / 35.274;
    console.log("10.5oz em KG é:",convert1);

    mi = 100;
    convert2 = mi * 1609;
    console.log("100 Milhas em Kilometros é", convert2);

    ft = 50;
    convert3 = ft / 3.281;
    console.log("50 FT em Metros é", convert3);

    gal = 103.56;
    convert4 = gal * 3,785;
    console.log("103.56 GAL em Litros é",convert4);

    xic = 450;
    convert5 = xic * 0.24;
    console.log("450 Xic em Litros é", convert5);

    lbqt = +prompt("Digite o LB para converter em KG");
    convert6 = lbqt / 2.205;
    console.log(lbqt,"LB em KG é",convert6);