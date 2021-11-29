let a = Math.floor(Math.random()*65536)-32768;
let b = Math.floor(Math.random()*65536)-32768;
let c = Math.floor(Math.random()*65536)-32768;
let maior = a;

if (b > maior){
    maior = b;
}

if (c > maior){
    maior = c;
}

let resultado = `Entre os valore ${a}, ${b} e ${c}, o maior é: ${maior}`;
console.log(resultado);