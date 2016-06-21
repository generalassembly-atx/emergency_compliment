var express = require('express');
var router = express.Router();



router.get('/:name', function(req, res, next) {
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.send("Welcome to Emergency Compliment, " + randomCompliment + req.params.name);
});



module.exports = router;
