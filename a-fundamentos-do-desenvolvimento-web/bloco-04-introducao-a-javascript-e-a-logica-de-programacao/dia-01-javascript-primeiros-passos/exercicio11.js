let salario = 1100;
let salarioBase = 0;
let inss = 0;
let ir = 0;
let salarioLiquido = 0;

// INSS
if (salario > 5189.92) {
    inss = 570.88
    salarioBase = salario - inss;
} else if (salario > 2594.92 && salario <= 5189.82) {
    inss = salario * .11;
    salarioBase = salario - inss;
} else if (salario > 1556.94 && salario <= 2594.92) {
    inss = salario * .09;
    salarioBase = salario - inss;
} else {
    inss = salario * .08;
    salarioBase = salario - inss;
}

// Valor IR
if (salarioBase > 4664.68){
    ir = (salarioBase * .275) - 869.36;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    ir = (salarioBase * .225) - 636.13;
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * .15) - 354.80;
} else if (salarioBase > 1903.99 && salarioBase <= 2826.66) {
    ir = (salarioBase * .075) - 142.80;
}

salarioLiquido = salarioBase - ir

console.log(salarioLiquido.toFixed(2));
