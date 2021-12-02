let a = Math.floor(Math.random()*180)+1;
let b = Math.floor(Math.random()*180)+1;
let c = Math.floor(Math.random()*180)+1;

let soma = a + b + c;
let triangulo = true;

if (soma === 180){
    triangulo = true;
} else {
    triangulo = false;
}

let resultado = `A soma de ${a} + ${b} + ${c} = ${soma}, então o triângulo é ${triangulo}`;

console.log(resultado);
