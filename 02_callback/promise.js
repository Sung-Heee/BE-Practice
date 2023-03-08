const promise = new Promise((resolve, reject) => {
  const hee = 'old';
  if (hee === 'old') {
    setTimeout(() => {
      resolve('hee is old');
    }, 3000);
  } else {
    reject('hee is getting old');
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
