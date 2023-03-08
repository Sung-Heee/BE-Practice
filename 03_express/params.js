// @ts-check
const express = require('express');

const app = express();

const PORT = 4000;

// 그냥 :id 해놓고 밑에 /api하면 충돌남
// id가 api라고 착각함
app.get('/id/:id/name/:name', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send('api 요청이 접수되었습니다.');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 에서 실행 중입니다~!`);
});
