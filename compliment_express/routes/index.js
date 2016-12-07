var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var compliments = ["Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"]
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];

  res.render('index', { title: 'Hi, have fun', compliment: compliment });

});

module.exports = router;
