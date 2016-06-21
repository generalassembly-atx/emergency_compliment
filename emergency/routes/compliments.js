var express = require('express');
var router = express.Router();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
];

router.get('/', function(req, res, next) {
var getRandomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send(getRandomCompliment);
  // res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next){
  res.render('newcompliment/new');
});


router.get('/:name',function(request, response){
  var getRandomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  response.send(getRandomCompliment + request.params.name);
});


router.post('/', function(req,res,next){
  // console.log(req.body.newCompliments);
  compliments.push(req.body.newCompliments);
  res.redirect('/');
})
module.exports = router;
