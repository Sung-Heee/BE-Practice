// @ts-check
const express = require('express');

const app = express();

const userRouter = require('./routes/users');

const PORT = 4000;

app.set('view engine', 'ejs');
// css ,js ,images
app.use(express.static('public'));
// js --> public
// app.use(express.static('js'));
// 미들웨어를 쓸때? use
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express World!');
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
