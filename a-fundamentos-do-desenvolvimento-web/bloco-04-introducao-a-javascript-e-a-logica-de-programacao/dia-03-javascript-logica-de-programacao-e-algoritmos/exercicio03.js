let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPlv = 0;
let menorPlv = array[0].length
let maiorPalavra = "";
let menorPalavra = "";

for (let palavra in array) {
    if (array[palavra].length > maiorPlv) {
        maiorPalavra = array[palavra];
        maiorPlv = array[palavra].length
    }
    if (array[palavra].length < menorPlv) {
        menorPalavra = array[palavra];
        menorPlv = array[palavra].length
    }
}

console.log(`A maior palavra do Array é: ${maiorPalavra}`);
console.log(`A menor palavra do Array é: ${menorPalavra}`);
