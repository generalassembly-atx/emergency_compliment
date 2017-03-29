var express = require('express');
var router = express.Router();



compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"];

function rand(){
  var getCompliments = compliments[~~(Math.random() * compliments.length)];

  return getCompliments;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dan\'s Emergency Compliments', comp: rand() });









});






module.exports = router;
