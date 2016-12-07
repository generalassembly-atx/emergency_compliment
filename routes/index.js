var express = require('express');
var router = express.Router();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart",
  "Britney Jo is sooo proud of you :)",
  "Sean would totally hire you",
  "It's almost beer o'clock"
];


var random = compliments[Math.floor(Math.random()*compliments.length)];

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Emergency Compliments', compliment: random });

});

router.get('/:name', function(req, res){

  var name = req.params.name;
  res.render('name', { title: 'Personalized Compliments', compliment: random , name: name});

});



module.exports = router;
