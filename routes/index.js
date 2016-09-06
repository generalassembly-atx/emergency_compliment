var express = require('express');
var router = express.Router();

function randomColor() {
  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emergency Comlipent' });
});




module.exports = router;
