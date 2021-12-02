let a = Math.floor(Math.random()*100)+1;
let b = Math.floor(Math.random()*100)+1;
let resultado = "";

if ( b == 0 ){
    resultado = `A divisão de ${b} / ${a} é igual a ${parseFloat(b / a).toFixed(2)}`;
} else {
    resultado = `A divisão de ${a} / ${b} é igual a ${parseFloat(a / b).toFixed(2)}`;
}

console.log(resultado);
