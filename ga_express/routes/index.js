var express = require('express');
var router = express.Router();

/* GET home page. */

compliments = [
"Chances are you'll never meet your soulmate",
"Today is the youngest you'll ever be again",
"2016 is almost over, although misfortune is not beholden to man's idea of time",
"Everybody dies :)",
"Bees are dying at an alarming rate",
"Almost all scientists agree that Human are the major cause of climate change"
];


router.get('/', function(req, res, next) {
var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', { compliment});
});

router.get('/:name', function (req, res) {
var compliment = compliments[Math.floor(Math.random()*compliments.length)];
var name = req.params.name || null;

  res.render('name', {name, compliment});
});


module.exports = router;
