var express = require('express');
var router = express.Router();
var complimentsArray = [
"Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart...I mean hard working!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "If you were a pokemon, I would choose you!",
  "Learn from your setbacks! We all have them!",
  "I'm spending more time thinking of compliments than coding, that's how much I want to compliment you!"
];
var colorsArray = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

var randomCompliment = function(){
  var compliment = complimentsArray[Math.floor(Math.random()*complimentsArray.length)];
  return compliment;
}
var randomColor = function(){
  var color = colorsArray[Math.floor(Math.random()*colorsArray.length)];
  return color;
}
/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { compliment: randomCompliment(), greeting: "Hey there!", color: randomColor()});
});
//custom compliment
router.get('/new', function (request, response, next){
  response.render('compliments/new');
});

router.post('/', function (request, response, next){
  var text = request.body.compliment;
  complimentsArray.push(text);
  response.redirect('/');
  console.log(complimentsArray);
});

//custom name

router.get('/:name',function(request, response){
  response.render('index', { compliment: randomCompliment(), greeting: "Hey there, " + request.params.name, color: randomColor()});
});



module.exports = router;

