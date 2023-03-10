const animals = ['puppy', 'cat'];

exports.animals = animals;

exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

// function showAnimals() {
//   // return과 중괄호 생략
//   animals.map((el) => console.log(el));
// }

// module.exports = {
//   animals,
//   showAnimals,
// };
