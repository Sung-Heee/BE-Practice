const express = require('express');

const router = express.Router();

// 데이터
const USER = [
  { id: 'sunghee', name: '성희', email: 'shshsh@shshsh.com' },
  { id: 'pororo', name: '뽀로로', email: 'pororo@pororo.com' },
];

router.get('/', (req, res) => {
  const userLen = USER.length;
  res.render('users', {
    USER,
    userCounts: userLen,
    imgSrc: './images/puppy.jpeg',
  });
});

router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

// 회원 등록 post 방식 (추가)
router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      const err = new Error('쿼리 등록이 잘못되었습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

router.put('/modify/:id', (req, res) => {
  // if (USER[req.params.id]) {
  //   if (req.query.id && req.query.name) {
  //     USER[req.params.id].id = req.query.id;
  //     USER[req.params.id].name = req.query.name;
  //     res.send('수정이 완료 되었습니다.');
  //   } else {
  //     res.end('쿼리 입력이 잘못 되었습니다.');
  //   }
  // } else {
  //   res.end('없는 id 입니다.');
  // }

  if (req.query.email && req.query.name) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료');
    } else {
      const err = new Error('해당 ID를 가진 회원이 없습니다.');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못 되었습니다.');
    err.statusCode = 404;
    throw err;
  }
});

router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    // splice - 지울 데이터는 1개
    USER.splice(userIndex, 1);
    res.send('회원 삭제 완료');
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다.');
    err.statusCode = 404;
    throw err;
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');
  for (let i = 0; i < USER.length; i++) {
    res.write(`<h2>USER ID is ${USER[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER[i].name}</h2>`);
  }
  res.end();
});

router.get('/ejs', (req, res) => {
  const userCounts = USER.length;
  // index 라고만 써도 됨 위에 app.set ejs 했으니
  res.render('index.ejs', { USER, userCounts });
});

module.exports = router;
