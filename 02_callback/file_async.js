const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  console.log('1번', data.toString());
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    console.log('1번', data.toString());
    fs.readFile('test.txt', 'utf-8', (err, data) => {
      if (err) return console.log(err);
      console.log('1번', data.toString());
      fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) return console.log(err);
        console.log('1번', data.toString());
      });
    });
  });
});
