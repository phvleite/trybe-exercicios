const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const lesson4 = {
  materia: 'Física',
  numeroEstudantes: 25,
  professor: 'Robson Mello',
  turno: 'tarde',
};

const lesson5 = {
  materia: 'Biologia',
  numeroEstudantes: 20,
  professor: 'Dias',
  turno: 'manhã',
};

const lesson6 = {
  materia: 'Português',
  numeroEstudantes: 30,
  professor: 'Carmelina',
  turno: 'manhã',
};

const lesson7 = {
  materia: 'Inglês',
  numeroEstudantes: 15,
  professor: 'Walter',
  turno: 'manhã',
};

const lesson8 = {
  materia: 'Moral e Cívica',
  numeroEstudantes: 20,
  professor: 'Lenira',
  turno: 'manhã',
};

const lesson9 = {
  materia: 'Desenho',
  numeroEstudantes: 20,
  professor: 'Jorginho',
  turno: 'tarde',
};

const modifyLesson = (obj, parameter, value) => obj[parameter] = value;

const listKeys = (obj) => console.log(Object.keys(obj));

const lengthObject = (obj) => console.log(Object.entries(obj).length);

const valuesObject = (obj) => {
  Object.values(obj).forEach((valor) => {
    console.log(valor);
  });
};

const allLessons = (lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9) => {
  const object1 = {lesson1};
  const object2 = {lesson2};
  const object3 = {lesson3};
  const object4 = {lesson4};
  const object5 = {lesson5};
  const object6 = {lesson6};
  const object7 = {lesson7};
  const object8 = {lesson8};
  const object9 = {lesson9};
  const joinLessons = Object.assign(object1, object2, object3, object4, object5, object6, object7, object8, object9);
  return joinLessons;
};

// listKeys(lesson2);
// lengthObject(lesson2);
// valuesObject(lesson2);

modifyLesson(lesson2, 'turno', 'noite');
modifyLesson(lesson3, 'numeroEstudantes', 40);

// listKeys(lesson2);
// lengthObject(lesson2);
// valuesObject(lesson2);

// allLessons(lesson1, lesson2, lesson3);

const lessons = allLessons(lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9);

const sumStudents = (obj, matter, teacher) => {
  let sum = 0;
  if (typeof matter === 'undefined'){
    Object.keys(obj).forEach((elem) => {
      sum += obj[elem].numeroEstudantes;
    });
  } else if (typeof teacher === 'undefined') {
    Object.keys(obj).forEach((elem) => {
      if (obj[elem].materia === matter) {
        sum += obj[elem].numeroEstudantes;
      }
    });
  } else {
    Object.keys(obj).forEach((elem) => {
      if (obj[elem].materia === matter && obj[elem].professor === teacher) {
        sum += obj[elem].numeroEstudantes;
      }
    });
  }
  return sum;
};

const getValueByNumber = (obj, val) => {
  console.log(Object.values(obj)[val]);
};

const verifyPair = (obj, val1, val2) => {
  if (Object.keys(obj).includes(val1) && Object.values(obj).includes(val2)) {
    if (obj[val1] === val2) {
      return true;
    };
  }
  return false;
};

const creatReport = (obj, teacher, matter) => {
  report = {
    professor: teacher,
    materia: matter,
    lesson: [],
    estudantes: sumStudents(obj, matter, teacher),
  }
  Object.keys(obj).forEach((elem) => {
    if (obj[elem].professor === teacher && obj[elem].materia === matter) {
      report.lesson.push(elem);
    }
  });
  return report;
};

creatReport(lessons, 'Maria Clara', 'Matemática')

const relatorioMariaClaraMatematica = creatReport(lessons, 'Maria Clara', 'Matemática');
console.log(relatorioMariaClaraMatematica);

// const matter = 'Moral e Cívica'
// console.log(sumStudents(lessons, matter));
// console.log(lessons);
// getValueByNumber(lesson8, 0);
// getValueByNumber(lesson8, 2);
// console.log(verifyPair(lesson4, 'professora', 'Robson Mello'));
