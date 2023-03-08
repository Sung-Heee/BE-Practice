// function func1(callback) {
//   console.log('1번 함수');

//   function fakeFunc3() {
//     console.log('3번인척 하는 함수');
//   }
//   callback(fakeFunc3);
// }

// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1(() => {
//   console.log('2번인척하는 새로 만든 익명 함수');
// });

function multiplication(number, callback) {
  let answer = 0;
  setTimeout(() => {
    answer = number ** 2;
    callback(answer);
  }, 2000);
}

// 결과를 출력해주는 함수
function say(result) {
  console.log(result);
}

multiplication(3, say);
