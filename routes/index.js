var express = require('express');
var router = express.Router();

/* GET home page. */
var compliments = [
"Your instructors love you",
"High five = ^5",
"Amanda thinks you're wicked smart!",
"Britney Jo is sooo proud of you! :)",
"Sean would totally hire you.",
"It's almost beer o'clock!",
"You rule the planet!",
"Everything you do is awesome. I mean it, really.",
"You are the essence of coolness.",
"The sun has never shined on such coolness as you radiate."
];
router.get('/', function(req, res, next) {

  var n = Math.floor(Math.random()*compliments.length);
  var name = '';
  res.render('index', {
    title: 'Emergency Compliment',
    compliment:compliments[n],
    name:name
  });
});
router.get('/add',function(req,res,next){
  res.render('add',{
    title: 'Emergency Compliment'
  });
})
router.post('/',function(req,res,next){
  console.log(req.body.compliment);
  compliments.push(req.body.compliment);
  console.log("last compliment:",compliments[compliments.length-1]);
});
// router.get('/:name', function(req, res, next) {
//   var compliments = [
//   "Your instructors love you",
//   "High five = ^5",
//   "Amanda thinks you're wicked smart!",
//   "Britney Jo is sooo proud of you! :)",
//   "Sean would totally hire you.",
//   "It's almost beer o'clock!",
//   "You rule the planet!",
//   "Everything you do is awesome. I mean it, really.",
//   "You are the essence of coolness.",
//   "The sun has never shined on such coolness as you radiate."
// ];
//
//   var n = Math.floor(Math.random()*compliments.length);
//   var name = req.params.name;
//   res.render('index', {
//     title: 'Emergency Compliment',
//     compliment:compliments[n],
//     name:name
//   });
//
// });

module.exports = router;
