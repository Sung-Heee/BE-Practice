// @ts-check
const express = require('express');

const server = express();

const PORT = 4000;

// http://localhost:4000/api
// server.use('/api', (req, res, next) => {
//   res.send('Hello, express!');
// });

server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date();
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  // res.send('응답 !!!');
  // next();
  // console.log('next 아래에 있는 콘솔 로그');
  res.send(`요청 시간은 ${req.reqTime} 입니다.`);
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});

// 서버가 정상적으로 실행이 되면 뒤에 함수를 실행시켜라
server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
