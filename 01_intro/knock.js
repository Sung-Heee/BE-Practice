const knockDoor = (second, name, callback) => {
  console.log('노크를 하고 기다립니다!');
  setTimeout(() => {
    callback(second, name);
  }, 3000);
};

function callName(second, name) {
  console.log(`${name}이가 ${second}초만에 문을 열고 나왔습니다..`);
}

knockDoor(3, '영식', callName);
