const a = Math.floor(Math.random()*65536)-32768;
const b = Math.floor(Math.random()*65536)-32768;
const c = Math.floor(Math.random()*65536)-32768;

if ( a % 2 != 0 || b % 2 != 0 || c % 2 != 0 ) {
    console.log(`a - ${a} | b - ${b} | c - ${c}`)
    console.log(true);
} else {
    console.log(`a - ${a} | b - ${b} | c - ${c}`)
    console.log(false);
}
