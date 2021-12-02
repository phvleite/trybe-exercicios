let a = Math.floor(Math.random()*100)+1;
let b = Math.floor(Math.random()*100)+1;
let resultado = "";

if (a > b){
    resultado = `A subtração de ${a} - ${b} é igual a ${a - b}`;
} else {
    resultado = `A subtração de ${b} - ${a} é igual a ${b - a}`;
}

console.log(resultado);
