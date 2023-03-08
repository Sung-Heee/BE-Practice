function funcHell(callback) {
  callback();
}

funcHell(() => {
  console.log('1번인척 하는 새로 만든 익명 함수');
  funcHell(() => {
    console.log('2번인척 하는 새로 만든 익명 함수');
    funcHell(() => {
      console.log('3번인척 하는 새로 만든 익명 함수');
    });
  });
});
