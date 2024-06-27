let team1 = 0;
let team2 = 0;


document.querySelector('#increaseScore1').addEventListener('click', function() {
  team1 += 1;
  document.querySelector('#team1Score').innerText = team1;
});
document.querySelector('#increaseScore2').addEventListener('click', function() {
  team2 += 1;
  document.querySelector('#team2Score').innerText = team2;
});