let a = Math.floor(Math.random()*65536)-32768;
let resultado = "";

if (a > 0) {
    resultado = "Positivo";
} else if (a < 0) {
    resultado = "Negativo";
} else {
    resultado = "Zero";
}

console.log(`O valor ${a} é ${resultado}`);
