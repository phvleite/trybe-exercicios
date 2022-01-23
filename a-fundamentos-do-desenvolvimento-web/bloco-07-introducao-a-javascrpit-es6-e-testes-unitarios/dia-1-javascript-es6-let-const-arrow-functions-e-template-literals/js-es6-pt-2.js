
// function fatorial(n) {
//     var resp = n;
//     while (n > 2) {
//         resp *= --n;
//     }
//     return resp;
// }

// // console.log(fatorial(5));

// const n = 5;

// const nFat = n < 1 ? 1 : fatorial(n);

// console.log(nFat);

// function longestWord(text) {
//     return text.split(' ').reduce((a, b) => a.length < b.length ? b : a, "");
// }
//console.log(longestWord('Antônio foi ao otorrinolaringologista e não sabemos o que aconteceu'));

// const skills = ['HTML', 'Javascript', 'CSS', 'React', 'Python'];

// const toReplaceX = (text, nome) => {
//     return text.replace(/x/g, nome);
// }

// const concatanateString = () => {
//     const text = 'Tryber x aqui!'
//     const nome = 'Paulo Leite';
//     let phrase = toReplaceX(text, nome);
//     let string = '';
//     skills.forEach(skill => string = string +` ${skill},`);
//     phrase = `${phrase} Minhas cinco principais habilidades são:${string}`;
//     phrase = `${phrase.substring(0, phrase.length - 1)}.`;
//     return phrase;
// }

// console.log(concatanateString());

const cpf = '12345678901';
const resultado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
console.log(resultado);
//console.log(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(resultado));

const cnpj = '01106587000100';
// 01.106.587/0001-00
const resultadoCnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
console.log(resultadoCnpj);
// const resultado2 = cpf.replace(/(\d{ 3 })/, '$1.');
// console.log(resultado2);

// let str = "Cara, cadê o meu carro?";
// let patt1 = /[a-z]/gi;
// let newStr = str.match(patt1);
// console.log(newStr);
