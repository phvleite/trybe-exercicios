const raffle = (number) => {
  const numberRaffle = generateNumber();
  if (checkNumberBet(number, numberRaffle) === true){
    return `Aposta: ${number} - Resultado: ${numberRaffle} - Parabéns, você ganhou`;
  }
  return `Aposta: ${number} - Resultado: ${numberRaffle} - Tente novamente`;
};

const generateNumber = () => {
  return parseInt((Math.random() * 5).toFixed(0));
}

const checkNumberBet = (numberBet, numberRaffle) => {
  if (numberBet === numberRaffle) {
    return true;
  }
  return false;
}

console.log(raffle(2));
console.log(raffle(3));
console.log(raffle(4));
console.log(raffle(5));
console.log(raffle(0));
