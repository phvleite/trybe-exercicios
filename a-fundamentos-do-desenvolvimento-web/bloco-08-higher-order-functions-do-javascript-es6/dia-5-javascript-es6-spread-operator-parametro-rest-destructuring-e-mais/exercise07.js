const ships = [
  {
    nome: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    nome: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    nome: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

const shipsLength = (obj) => {
  const { nome, length, measurementUnit } = obj;
  return `${nome} is ${length} ${measurementUnit} long`;
};

console.log(shipsLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipsLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipsLength(ships[2])); // 'Yamato is 256 meters long'
