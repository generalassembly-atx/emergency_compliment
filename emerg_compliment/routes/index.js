const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  let compArray = ["Your instructors love you", "High five = ^5", "Amanda thinks you're wicked smart!", "Britney Jo is sooo proud of you! :)", "Sean would totally hire you.", "It's almost beer o'clock!"]

  let item = compArray[Math.floor(Math.random()*compArray.length)];
  
  res.send('index');

});





module.exports = router;
