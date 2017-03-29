var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/', (req, res, next) => {
  const newCompliment = req.body.compliment;
  res.send(`Your new compliment is: ${newCompliment}`);
});



module.exports = router;
