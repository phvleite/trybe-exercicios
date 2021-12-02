let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 135, 27, 0.05];
let menor = numbers[0];

for (number in numbers){
    if (numbers[number] < menor){
        menor = numbers[number];
    }
}

console.log(`Entre todos os numeros contidos neste array [${numbers}], o menor valor é ${menor}`);
