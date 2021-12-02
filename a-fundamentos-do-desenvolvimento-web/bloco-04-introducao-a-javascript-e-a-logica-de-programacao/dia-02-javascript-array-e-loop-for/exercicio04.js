let numbers = [5, 9, 3, 19, 70, 8, 2, 35, 100];
let soma = 0;

for (let number in numbers){
    soma = soma + numbers[number];
}

if (soma/numbers.length > 20) {
    console.log(`O valor ${(soma/numbers.length).toFixed(2)} é maior que 20`);
} else {
    console.log(`O valor ${(soma/numbers.length).toFixed(2)} é menor ou igual a 20`);
}
