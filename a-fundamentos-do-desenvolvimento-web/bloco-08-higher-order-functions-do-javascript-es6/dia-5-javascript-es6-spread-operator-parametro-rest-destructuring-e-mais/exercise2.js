const sum = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum(2, 5, 6, 10, 25, 43));
