// 뺄 거 앞에 export
export const animals = ['puppy', 'cat'];

export function showAnimals() {
  animals.map((el) => console.log(el));
}

// 위에 앞에 export 다 빼고 아래 문장 써도 실행됨
// export{animals, showAnimals}
