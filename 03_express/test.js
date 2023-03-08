// @ts-check
const express = require('express');

const app = express();

const PORT = 4000;

app.get(
  '/email/:email/password/:password/name/:name/gender/:gender',
  (req, res) => {
    res.send(req.params);
    console.log(req.params);
  }
);

app.get('/', (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중`);
});
