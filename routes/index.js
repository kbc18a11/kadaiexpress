var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/**
 * 素数
 * URIパラメータ num で数値を指定します
 */
router.post('/primenumber', function (req, res, next) {
  const num = Number(req.body.num);

  if (num === 2 || num === 3 || num === 5 || num === 7) {
    return res.json({ answer: `${num}は素数やんけ！！` });
  }

  if (num % 2 === 0) {
    return res.json({ answer: `${num}は素数じゃないやんけ！！` });
  }

  if (num % 3 === 0) {
    return res.json({ answer: `${num}は素数じゃないやんけ！！` });
  }

  if (num % 5 === 0) {
    return res.json({ answer: `${num}は素数じゃないやんけ！！` });
  }

  if (num % 7 === 0) {
    return res.json({ answer: `${num}は素数じゃないやんけ！！` });
  }

  return res.json({ answer: `${num}は素数やんけ！！` });

});

/**
 * 掛け算
 */
router.post('/multiplication', function (req, res, next) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  return res.json({ answer: num1 * num2 });
});

module.exports = router;
