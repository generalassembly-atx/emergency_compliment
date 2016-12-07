var express = require('express');
var router = express.Router();
var compliments =
 ['You da best.',
 'Say heller',
 'Yoshi sucks',
 'Man that lettuce is FIERCE',
 'I want to touch z hiney',
 'Thats a good head of lettuce!'];
var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];

 /* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { compliment: randomCompliment });
 });
 /* GET name page. */
 router.get('/:name', function(req, res){
   var name = req.params.name || 'Who r u tho';
   res.render('name', {
     name: name,
     compliment: randomCompliment });
 });

 module.exports = router;
