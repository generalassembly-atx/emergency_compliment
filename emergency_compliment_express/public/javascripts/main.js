$('#new-compliment').on('click', function(){
  var compliments = ['Women want you. Men want to be you.', 'You smell like s\'mores.', 'Have you been working out?', 'Is it me or did it just get really hot in here?!', 'Your intellect is truly staggering!', 'Your radiance warms the coldest temperament.'];
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];

  $('#compliment').text(compliment);
});
