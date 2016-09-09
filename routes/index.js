var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emergency Compliment!' });
});

function getCompliment() {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Amanda thinks you're wicked smart!",
    "Britney Jo is sooo proud of you! :)",
    "Sean would totally hire you.",
    "It's almost beer o'clock!"
  ]
  return compliments[Math.floor(Math.random()*compliments.length)]
}

function randomColor() {
  var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  return colors[Math.floor(Math.random()*colors.length)];
}

module.exports = router;
