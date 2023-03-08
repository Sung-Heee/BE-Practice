// @ts-check

// fs는 노드 기본 모듈 설치하지 않아도 됨
const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (에러, 데이터) => {
  if (에러) {
    console.log(에러);
  } else {
    console.log(데이터);
  }
});

const str = '파일 쓰기 테스트';
fs.writeFile('test1.txt', str, 'utf-8', (에러) => {
  if (에러) {
    console.log(에러);
  } else {
    console.log('writefile succeed');
  }
});
