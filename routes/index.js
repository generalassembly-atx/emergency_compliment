var express = require('express');
var router = express.Router();

var complements = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

function getRandomCompliments(items){
  return items[Math.floor(Math.random()*items.length)];
}
/* GET home page. */
router.get('/', function(req, res, next) {

  //generate complement

  res.render('index', {complement: getRandomCompliments(complements) });
});



module.exports = router;
