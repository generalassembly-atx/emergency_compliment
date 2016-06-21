var express = require('express');
var router = express.Router();

compliments = [
  "Your instructors probably love you",
  "High five = ^5",
  "Amanda thinks you're smart",
  "Britney Jo is pretty proud of you",
  "Sean might hire you",
  "In a while it'll be close to beer o'clock",
  "nice butt",
  "congratulations",
  "I saw that, good job",
  "you gotta be kidding me you are so cool"
]


/* GET home page. */
router.get('/', function(req, res, next) {
  var randomComp = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', { name: '', message: randomComp });
});

router.get('/:id', function(req, res, next) {
  var name = req.params.id;
  var randomComp = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', { name: name,  message: randomComp + ', ' + name });
});


module.exports = router;
