let numbers = [];

for (let i = 0; i < 25; i += 1){
    numbers.push(Math.floor(Math.random()*65536)-32768);    
}

console.log(`Esta foi a array gerada: [${numbers}]`);
