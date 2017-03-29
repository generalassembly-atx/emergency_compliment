
var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  var compliment = [
      "var you = 'code warrior'",
      "console.log(you + ', ready for battle');",
      "You've got this - upward and onward!",
      "WDI = Who Done It? You done it!",
      "Just keep swimming, swimming, swimming. . .",
      "Happy learning!",
      "Coding fingers are happy fingers"
  ];
  var item = compliment[Math.floor(Math.random()*compliment.length)];
  res.render('index', { title: 'Hey You',  compliment: item });
});

// Name
// router.get('/:name', function(req, res, next) {
//   var name = req.params.name;
//   res.render('index', { name:name });
// });

module.exports = router;
