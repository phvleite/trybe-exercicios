let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 135, 27];
let maior = 0;

for (number in numbers){
    if (numbers[number] > maior){
        maior = numbers[number];
    }
}

console.log(`Entre todos os numeros contidos neste array [${numbers}], o maior valor é ${maior}`);

