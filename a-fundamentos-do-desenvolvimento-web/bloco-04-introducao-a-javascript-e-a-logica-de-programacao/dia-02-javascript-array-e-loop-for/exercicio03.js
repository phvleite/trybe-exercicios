let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let number in numbers){
    soma = soma + numbers[number];
}

console.log((soma/numbers.length).toFixed(2));
