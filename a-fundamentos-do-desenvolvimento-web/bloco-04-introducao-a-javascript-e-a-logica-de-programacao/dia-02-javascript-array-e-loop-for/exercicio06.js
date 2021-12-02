let numbers = [6, 8, 4, 20, 70, 8, 100, 2, 136, 28];
let impares = [];

for (number in numbers){
    if (numbers[number] % 2 != 0){
        impares.push(numbers[number]);
    }
}

if (impares.length > 0){
    console.log(`Entre todos os numeros contidos neste array [${numbers}], o valores ímpares são [${impares}]`);
} else {
    console.log(`No array [${numbers}] não há números ímpares`);
}
