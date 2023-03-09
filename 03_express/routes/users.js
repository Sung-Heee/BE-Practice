// @ts-check
const express = require('express');

const router = express.Router();

// 데이터
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

router.get('/', (req, res) => {
  const userLen = USER_ARR.length;
  res.render('users', {
    USER_ARR,
    userCounts: userLen,
    imgSrc: './images/puppy.jpeg',
  });
});

router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('아이디를 못 찾겠어요');
  }
});

router.post('/add', (req, res) => {
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

router.put('/modify/:id', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
  if (USER[req.params.id]) {
    delete USER[req.params.id];
    res.send('삭제되었습니다.');
  } else {
    res.end('없는 id 입니다.');
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');
  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

router.get('/ejs', (req, res) => {
  const userCounts = USER_ARR.length;
  // index 라고만 써도 됨 위에 app.set ejs 했으니
  res.render('index.ejs', { USER_ARR, userCounts });
});

module.exports = router;
