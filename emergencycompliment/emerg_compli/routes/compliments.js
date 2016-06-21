var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment')




  var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
  ]

var random = function(){
  return compliments[Math.floor(Math.random()*compliments.length)];
}

router.get('/', function(req, res, next) {
  res.send(random());
});

router.post('/', function(req, res, next) {
  var newcompliment = req.body.name;
  compliments.push(newcompliment);
  res.redirect('/');
});

router.get('/new', function(req, res, next) {
  res.render('newcompliment/new');
});

router.get('/:Compliment', function(req, res, next) {
  res.send(random() + " " +req.params.name);
});



module.exports = router;
