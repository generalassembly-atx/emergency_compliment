var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "You rule the planet!",
  "Everything you do is awesome. I mean it, really.",
  "You are the essence of coolness.",
  "The sun has never shined on such coolness as you radiate."
];
  var n = Math.floor(Math.random()*compliments.length);

  res.render('index', {
    title: 'Emergency Compliment',
    compliment:compliments[n]
  });

});

module.exports = router;
