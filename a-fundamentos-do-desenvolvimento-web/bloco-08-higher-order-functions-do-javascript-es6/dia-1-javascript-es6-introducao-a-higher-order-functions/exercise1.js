const newEmployees = (nome) => {
  const email = nome.toLowerCase().split(' ').join('') + '@trybe.com';
  const employees = {
    nomeCompleto : nome,
    email,
  }
  return employees;
};

// id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
// id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
// id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
console.log(newEmployees('Paulo Leite'));
console.log(newEmployees('Pedro Guerra'));
console.log(newEmployees('Luiza Drummond'));
console.log(newEmployees('Carla Paiva'));
console.log(newEmployees('Luisa de Marilac'));
