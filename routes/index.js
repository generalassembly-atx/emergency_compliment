var express = require('express');
var router = express.Router();

/* GET home page. */

var compliments = [
  "Your eyebrows are on fleek.",
  "You dont suck at life",
  "You're grrrrrrrrrreat",
  "Coding is easy, not really...",
  "You showed up, that counts for something?",
  "It's whiskey time!"
];
// var item = items[Math.floor(Math.random()*items.length)];
var compliment = compliments[Math.floor(Math.random()*compliments.length)];
return compliment;


router.get('/', function(req, res, next) {

  res.render('index', {title: 'E compliment', compliment : compliment});
});

module.exports = router;
