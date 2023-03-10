// const animalModule = require('./animals');

// console.log(animalModule);
// console.log(animalModule.animals);
// animalModule.showAnimals();
// // 외부에 있는 파일에 정의된 변수, 함수를 가져와서 씀

const { animals, showAnimals } = require('./animals');

console.log(animals);

showAnimals();
