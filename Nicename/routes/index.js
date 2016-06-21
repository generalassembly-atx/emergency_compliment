var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]
app.get('/', function(request, response){
  var oneCompliment = request.params.numberofBottles;
  var nextBottle = numberofBottles - 1;
  response.render('index', {bottles: numberofBottles,
      next: nextBottle})



module.exports = router;

var item = items[Math.floor(Math.random()*items.length)];
