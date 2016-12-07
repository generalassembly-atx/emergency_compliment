var express = require('express');
var router = express.Router();

/* Generates random compliment */
function compliments() {
  var compliments = [
    "Your instructors love you",
    "High Five = ^5",
    "Amanda thinks you're wicked smart!",
    "Britney Jo is sooo proud of you!",
    "Sean would totally hire you.",
    "Its almost beer o'clock!"
  ];
  return compliments[Math.floor(Math.random()*compliments.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var compliment = compliments();
  res.render('index', { title: 'GA Complimenter',
                        compliment: compliment });
});

/* GET name page. */
router.get('/:name', function(req, res, next) {
  var compliment = compliments();
  var name = req.params.name || "Mystery Person";
  res.render('name', { name: name,
                       compliment: compliment,
                       title: name });
});

module.exports = router;
