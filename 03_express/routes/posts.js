const express = require('express');

const router = express.Router();

const POSTS = [];
router.get('/', (req, res) => {
  const postsLen = POSTS.length;
  res.render('posts', { POSTS, postsCount: postsLen });
});
router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POSTS.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('데이터가 입력 되지 않았습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터의 입력이 잘못 되었습니다.');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
