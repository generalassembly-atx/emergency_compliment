var express = require('express');
var router = express.Router();

// var comp = [];
// var compInput = comp.val();
// comp.val().push(getRandomCompliments(compliments));

console.log(array);
function getRandomCompliments(random){
	var compliments = [
		"Your instructors love you",
		"High five = ^5",
		"Amanda thinks you're wicked smart!",
		"Britney Jo is sooo proud of you! :)",
		"Sean would totally hire you.",
		"It's almost beer o'clock!"
	];

	var random = compliments[Math.floor(Math.random()*compliments.length)];
	return random;
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feel Better Fool!!', compliments: getRandomCompliments() });
});

router.get('/:name', function(req, res, next) {

	var name = req.params.name;
  res.render('name', { title: 'Feel Better Fool!!', compliments: getRandomCompliments(), name: name });
});







module.exports = router;
