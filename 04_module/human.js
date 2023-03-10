const human = ['철수', '영희'];

function showName() {
  human.map((el) => console.log(el));
}

module.exports = {
  showName,
};

// common.js는 package.json 파일에 이게 있으면 안됨
// 에러뜸
// ,
//   "type": "module"
