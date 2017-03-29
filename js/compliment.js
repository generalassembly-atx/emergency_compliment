var express = require('express');
var router = express.Router();

function compliments() {
  var compliments = [
    "Your instructors love you",
    "High Five = ^5",
    "Amanda thinks you're wicked smart!",
    "Britney Jo is sooo proud of you!",
    "Sean would totally hire you.",
    "Its almost beer o'clock!"
  ];

  var compliment = compliments[Math.floor(Math.random()*compliments.length)];

  return compliment;
}

router.get('/', function(req, res, next) {
  var compliment = compliments();
  res.render('index', { title: 'GA Complimeter',
                        compliment: compliment });
});


router.get('/:name', function(req, res, next) {
  var compliment = compliments();
  var name = req.params.name || "Mystery Person";
  res.render('name', { name: name,
                       compliment: compliment});
});

module.exports = router;
