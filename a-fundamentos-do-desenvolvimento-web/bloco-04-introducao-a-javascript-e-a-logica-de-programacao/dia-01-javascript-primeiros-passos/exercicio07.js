let nota = Math.floor(Math.random() * 100) + 1;
let conceito = ""

if (nota >= 90) {
    conceito = "A";
} else if (nota >= 80) {
    conceito = "B";
} else if (nota >= 70) {
    conceito = "C";
} else if (nota >= 60) {
    conceito = "D";
} else if (nota >= 50) {
    conceito = "E";
} else {
    conceito = "F";
}

console.log(`Com nota ${nota}, seu conceito foi ${conceito}`);
