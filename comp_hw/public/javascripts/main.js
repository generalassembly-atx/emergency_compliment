$('#get-compliment').on('click', function(){
  var compliments =
   ['You da best.',
   'Say heller',
   'Yoshi sucks',
   'Man that lettuce is FIERCE',
   'I want to touch z hiney',
   'Thats a good head of lettuce!'];
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];

   $('#compliment').text(randomCompliment);
 });


// $(function(){
//
//   $('#thanksButton').on('click', function(){
//     // console.log('button works');
//     var compliments = [
//       "Your instructors love you",
//       "High five = ^5",
//       "Amanda thinks you're wicked smart!",
//       "Britney Jo is sooo proud of you! :)",
//       "Sean would totally hire you.",
//       "It's almost beer o'clock!"
//     ];
//
//     var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
//
//    $('#compliment').text(randomCompliment);
//
//   });
//
//   $('#nameButton').on('click', function(){
//     console.log('button works');
//     var compliments = [
//       "Your instructors love you",
//       "High five = ^5",
//       "Amanda thinks you're wicked smart!",
//       "Britney Jo is sooo proud of you! :)",
//       "Sean would totally hire you.",
//       "It's almost beer o'clock!"
//     ];
//
//     var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
//
//    $('#nameCompliment').text(randomCompliment + 'name');
// });
//
// });
