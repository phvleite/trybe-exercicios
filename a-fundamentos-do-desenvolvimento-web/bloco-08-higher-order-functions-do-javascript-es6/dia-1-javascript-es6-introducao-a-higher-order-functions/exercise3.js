const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const templateCheck = (template, answers) => {
  let value = 0;
  answers.forEach((answer, ind) => {
    if (template[ind] === answer) {
      value += 1;
    }
  });
  return value;
};

const result = (template, answers) => {
  return templateCheck(template, answers);
};

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS));
