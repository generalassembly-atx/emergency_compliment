var express = require('express');
var router = express.Router();

/* GET home page. */
var compliments = [  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "You're a spectacular person!"];
// router.get('/', function(req, res, next) {
//   res.send(compliments);
// });




router.get('/', function(req, res, next) {
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send("Welcome! Enjoy your complimentary compliment.... " + randomCompliment);
});

router.get('/:name', function(req, res, next) {
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send("Welcome! Enjoy your complimentary compliment.... " + req.params.name + ", " + randomCompliment);
});


router.get('/new', function(req, res, next){
  res.render('views/new');
});

module.exports = router;
