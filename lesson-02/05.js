// Дан объект passport. Создай его копию и поменяй имя с "Petr" на
// "Ivan", и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".

let passport = {
  name: "Petr",
  surname: "Petrov",
};

// let passport2 = {...passport}
let passport2 = structuredClone(passport);
passport2.name = "Ivan";

console.log(passport);
console.log(passport2);
