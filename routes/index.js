var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GA Compliment Generator',
    compliment: getRandomCompiments()
  });
});

router.get('/mike', (req, res, next) => {
  res.render('mike', {
    compliment: getRandomCompiments(),
    name: 'Mike',
    title: 'GA Compliment Generator',
    // color: getRandomColors()
  });
});

// js colors = ["#fd6c3b", "#4edacf", "#65a576", "#f2d83d"];
//
// function getRandomColors() {
//   var newColors = compliments[Math.floor(Math.random() * compliments.length)];
//   return newColors;
// }


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

function getRandomCompiments() {
  var newCompliments = compliments[Math.floor(Math.random() * compliments.length)];
  return newCompliments;
}


module.exports = router;
