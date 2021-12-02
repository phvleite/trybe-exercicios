let numbers = [];
let numbersHalf = [];

for (let i = 0; i < 25; i += 1){
    numbers.push(Math.floor(Math.random()*100)+1);    
}

for (number in numbers){
    numbersHalf.push((numbers[number]/2).toFixed(2))
}

console.log(`Esta foi a array gerada: [${numbers}]`);
console.log(`Esta são os seus valores divididos por 2: [${numbersHalf}]`);
