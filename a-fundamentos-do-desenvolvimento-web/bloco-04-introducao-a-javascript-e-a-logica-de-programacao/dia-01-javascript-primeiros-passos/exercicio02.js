let a = Math.floor(Math.random()*100)+1;
let b = Math.floor(Math.random()*100)+1;
let resultado = "";

if ( a > b ){
    resultado = `O valor ${a} é maior que ${b}`;
} else if ( a < b) {
    resultado = `O valor ${b} é maior que ${a}`;
} else {
    resultado = `O valor ${a} é igual a ${b}`;
}

console.log(resultado);
