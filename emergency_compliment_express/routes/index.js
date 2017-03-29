var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var compliments = ['Women want you. Men want to be you.', 'You smell like s\'mores.', 'Have you been working out?', 'Is it me or did it just get really hot in here?!', 'Your intellect is truly staggering!', 'Your radiance warms the coldest temperament.'];
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', { compliment: compliment });
});

router.get('/:name', function(req, res){

  var name = req.params.name || 'Anonymous';
  var compliments = ['Women want you. Men want to be you.', 'You smell like s\'mores.', 'Have you been working out?', 'Is it me or did it just get really hot in here?!', 'Your intellect is truly staggering!', 'Your radiance warms the coldest temperament.'];
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('name', { name: name, compliment: compliment });
});

module.exports = router;
