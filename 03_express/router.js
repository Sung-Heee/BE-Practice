// @ts-check
// eslint-disable-next-line import/no-unresolved
const express = require('express');

const app = express();
const PORT = 4000;

const USER = {
  1: {
    id: 'sunghee',
    name: '조성희',
  },
  2: {
    id: 'hee',
    name: '희',
  },
  3: {
    id: 'sung',
    name: '성',
  },
};

const USER_ARR = [
  { id: 'sunghee', name: '성희', email: 'shshsh@shshsh.com' },
  { id: 'pororo', name: '뽀로로', email: 'pororo@pororo.com' },
];

app.set('view engine', 'ejs');

const userRouter = express.Router();

console.log(__dirname);
// 미들웨어를 쓸때? use
app.use('/users', userRouter);
// css
app.use(express.static(__dirname + 'views'));
// js
app.use(express.static('js'));

app.get('/', (req, res) => {
  res.send('Hello, Express World!');
});

// http://localhost:4000/users
// http://127.0.0.1:4000/users
userRouter.get('/', (req, res) => {
  res.send(USER);
});

userRouter.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('아이디를 못 찾겠어요');
  }
});

userRouter.post('/add', (req, res) => {
  if (req.query.id && req.query.name) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
    };
    USER[Object.keys(USER).length + 1] = newUser;
    res.send('회원 등록 완료');
  } else {
    res.end('쿼리 입력이 잘못 되었습니다.');
  }
});

userRouter.put('/modify/:id', (req, res) => {
  if (USER[req.params.id]) {
    if (req.query.id && req.query.name) {
      USER[req.params.id].id = req.query.id;
      USER[req.params.id].name = req.query.name;
      res.send('수정이 완료 되었습니다.');
    } else {
      res.end('쿼리 입력이 잘못 되었습니다.');
    }
  } else {
    res.end('없는 id 입니다.');
  }
  // if (req.query.email && req.query.name) {
  //   if (req.params.id in USER) {
  //     USER[req.params.id] = {
  //       email: req.query.email,
  //       name: req.query.name,
  //     };
  //     res.send('회원 정보 수정 완료');
  //   } else {
  //     res.send('없는 id');
  //   }
  // } else {
  //   res.send('잘못된 쿼리 입력입니다.');
  // }
});

userRouter.delete('/delete/:id', (req, res) => {
  if (USER[req.params.id]) {
    delete USER[req.params.id];
    res.send('삭제되었습니다.');
  } else {
    res.end('없는 id 입니다.');
  }
});

userRouter.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');
  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

userRouter.get('/ejs', (req, res) => {
  const userCounts = USER_ARR.length;
  // index 라고만 써도 됨 위에 app.set ejs 했으니
  res.render('index.ejs', { USER_ARR, userCounts });
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
