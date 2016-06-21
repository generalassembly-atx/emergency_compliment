var express = require('express');
var router = express.Router();
var randomCompliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "Members of WDI6 are the best!"
  ];


router.get('/', function(req, res, next) {
  var random = randomCompliments[Math.floor(Math.random()*randomCompliments.length)];
  res.save(random);
});

router.post('/compliments', function(req, res, next){
  //take value from req.body as a string
  var text = req.body.compliment;
  // console.log(text);
  //add string to randomCompliments array
  randomCompliments.push(text);
  //run random again
  var random = randomCompliments[Math.floor(Math.random()*randomCompliments.length)];
  // console.log(req.body);
  // res.redirect('/');
});

router.get('/new', function(req, res, next){
  res.render('compliments/new');
});

router.get('/:name', function(req, res, next){
  //when name is input, random function is given
  var random = randomCompliments[Math.floor(Math.random()*randomCompliments.length)];
  var withName = (req.params.name + ", " + random);
  res.send(withName);
  //name is appended to front of compliment
});

module.exports = router;


