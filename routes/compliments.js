var express = require('express');
var router = express.Router();
// var Compliment = require('../models/compliment');


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
];

router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send(compliment);
});

router.get('/new', function(req, res, next) {
  res.render('compliments/new');
})

router.get('/:name', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send(req.params.name + ', ' + compliment);
})

router.post('/new', function(req, res, next) {
  compliments.push(req.body.compliment)
  res.redirect('/');
})


module.exports = router;
