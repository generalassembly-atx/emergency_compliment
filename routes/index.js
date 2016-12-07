var express = require('express');
var router = express.Router();

function compliments () {
  var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "Good job, you don't suck that much",
  "No one has told you to fuck off today!"
];
var compliment = compliments[Math.floor(Math.random()*compliments.length)];

return compliment;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  var compliment = compliments()
  res.render('index', { title: 'Emergency Compliment', compliment: compliment});
});
router.get('/name/:name', function(req, res, next) {
  var name = req.params.name || 'Bob Dole';
  var compliment = compliments();

res.render('name', {title: 'Emergency Compliment', name: name, compliment: compliment});
});
// app.all('/users', function (req, res, next) {
//   console.log('This will be executed in all /users routes, regardless of the HTTP verb used');
//   next(I have no idea what I am doing here); // pass control to the next handler
// });


module.exports = router;
