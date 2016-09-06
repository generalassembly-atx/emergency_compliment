var express = require('express');
var router = express.Router();

function randomColor() {
  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomCompliments() {
  var compliments = [
    "You are appreciated by many of you team members",
    "Your bartender appreciates your patience",
    "Its a beautiful day and so are you",
    "Good answer",
  ];
  return compliments[Math.floor(Math.random() * compliments.length)];
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emergency Comlipent',
  compliment: getRandomCompliments()
  });
});

router.get('/:name', (req, res, next) => {
  const name = req.params.name;

  // $('#compliments').text(res.send('Compliments '+ name))
});




module.exports = router;
