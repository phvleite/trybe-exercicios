let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersNext = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i != numbers.length - 1) {
        numbersNext.push(numbers[i] * numbers[i + 1]);
    } else {
        numbersNext.push(numbers[i] * 2);
    }
}

console.log(numbers);
console.log(numbersNext);
