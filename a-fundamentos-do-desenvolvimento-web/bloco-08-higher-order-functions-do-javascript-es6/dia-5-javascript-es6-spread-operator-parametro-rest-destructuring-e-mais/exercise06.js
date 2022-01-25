const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (arr) => {
  const [ car, manufacturer, year ] = arr;
  obj = { car, manufacturer, year };
  return obj;
};

const objPalio = toObject(palio);
const objShelbyCobra = toObject(shelbyCobra);
const objChiron = toObject(chiron);

console.log(objPalio);
console.log(objShelbyCobra);
console.log(objChiron);
