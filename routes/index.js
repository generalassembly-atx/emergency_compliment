var express = require('express');
var router = express.Router();

//GET RANDOM COLOR
function randomColor () {
  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  return colors[Math.floor(Math.random() * colors.length)];
}

//GET RANDOM COMPLIMENTS
function getRandomCompliments() {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Amanda thinks you're wicked smart!",
    "Britney Jo is sooo proud of you! :)",
    "Sean would totally hire you.",
    "It's almost beer o'clock!",
    "You are kicking major butt",
    "You are out of this world!"
  ];
  return compliments[Math.floor(Math.random() * compliments.length)];
}
// $('.compliments').text(getRandomCompliments());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Emergency!',
    compliment: getRandomCompliments()
  });
});

router.get('/:name', (req, res, next) => {
  const name = req.params.name;

  // $('#compliments').text(res.send('Compliments '+ name))
});









module.exports = router;
