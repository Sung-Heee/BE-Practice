const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = 4000;

const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');
// css ,js ,images
app.use(express.static('public'));

// body.parser을 선언하는 이유 -> 폼 태그에 있는 정보들을 req.body 에 담기 위해
// 밑에 ROUTER 위에 써야함
// 아니면 undefinded가 출력
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 미들웨어를 쓸 때? --> use
// localhost:4000
app.use('/', mainRouter);
// localhost:4000/users
app.use('/users', userRouter);
// localhost:4000/posts
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express World!');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<br /><a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
