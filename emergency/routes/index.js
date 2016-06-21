var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Welcome to the Emergency Compliment' });
// });

var compliments = [
  "Your instructors hate you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally fire you.",
  "It's almost beer o'clock!"
]

router.get('/', function(req, res, next) {
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send("Welcome to Emergency Compliment, " + randomCompliment);
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

/* GET home page. */
router.get('/:name', function(req, res, next) {
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send("Welcome to Emergency Compliment, " + randomCompliment + " " + req.params.name);
});

router.post('/', function(req, res, next) {
  compliments.push(req.body.compliments);
  res.redirect('/');
})




module.exports = router;
