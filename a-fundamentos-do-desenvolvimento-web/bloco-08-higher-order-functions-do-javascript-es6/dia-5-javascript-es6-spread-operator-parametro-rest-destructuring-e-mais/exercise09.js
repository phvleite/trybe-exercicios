
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const month = [...spring, ...summer, ...autumn, ...winter];
console.log(month);
const [ m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m1, m2 ] = month;
const mes = [ m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];
console.log(mes);
