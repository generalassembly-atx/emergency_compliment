var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GA Compliment Generator',
    compliment: getRandomCompiments()
  });
});

router.get('/kollin', (req, res, next) => {
  res.render('kollin', {
    compliment: getRandomCompiments(),
    name: 'Kollin',
    title: 'GA Compliment Generator',
    color: getRandomColors(),
  });
});

var colors = ["#fd6c3b", "#4edacf", "#65a576", "#f2d83d"];
function getRandomColors() {
  var chooseColors = colors[Math.floor(Math.random() * colors.length)];
  return chooseColors;
}


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Steve says your hair isn't that terrible!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally not fire you.",
  "Good news you can go home until 8am tomorrow",
  "You know who rules? Steve Brule rules!....and you!",
  "Have an apple for your health!"
]

function getRandomCompiments() {
  var getCompliments = compliments[Math.floor(Math.random() * compliments.length)];
  return getCompliments;
}


module.exports = router;
