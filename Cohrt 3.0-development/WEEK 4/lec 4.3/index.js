const express = require('express');
const app = express();
const port = 3000;

// function that checks if age is old enough to ride and returns true or false(Boolean)
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   }else{
//     return false;
//   }
// }


function isOldEnoughMiddleware(req, res, next) {
  if (req.query.age >= 14) {
    next();
  }else{
    res.status(400).json({message: 'You are not old enough to ride!'});
  }
}

app.get('/ride1',isOldEnoughMiddleware , (req, res) => {
    res.json({
      message: 'You are old enough to ride1!',
    });
});


app.get('/ride2',isOldEnoughMiddleware , (req, res) => {
  res.json({
    message: 'You are old enough to ride2!',
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});