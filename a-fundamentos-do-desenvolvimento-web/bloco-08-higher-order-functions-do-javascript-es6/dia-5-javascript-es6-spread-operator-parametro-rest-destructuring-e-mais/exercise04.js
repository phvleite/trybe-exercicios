const people = [
  {
    nome: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    nome: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    nome: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    nome: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    nome: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (obj) => {
  const { bornIn, nationality } = obj;
  if (bornIn > 2000 && nationality === 'Australian') {
    return true;
  }
  return false;
};

const allAustralian = people.filter(filterPeople);

console.log(allAustralian);



