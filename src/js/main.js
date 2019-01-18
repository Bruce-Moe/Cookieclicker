var score = 0; // Define global variable to hold score
var clickers = [0, 0]; //Autoclick, farm
var costMult = [12, 45];
var scoreMult = [1, 5];

//Update index.html text elements function
function update() {
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = 'Score: ' + score; // Update the score in the DOM

  var amount_div = document.getElementsByClassName('amountAutoClick')[0];
  amount_div.innerHTML= "You Own " + clickers[0] + " Autoclickers";
  var cost_div = document.getElementsByClassName('CostAutoClick')[0];
  cost_div.innerHTML= "Cost " + ((clickers[0]+1) * costMult[0]) + " Cookies";

  var amountfarms_div = document.getElementsByClassName("amountFarms")[0];
  amountfarms_div.innerHTML = "You Own " + clickers[1] + " Farms";
  var costfarms_div = document.getElementsByClassName("costFarm")[0];
  costfarms_div.innerHTML= "Cost " + ((clickers[1]+1) * costMult[1]) + " Cookies";

  var cookiespersec_div = document.getElementsByClassName("persecond")[0];
  cookiespersec_div.innerHTML= "You are gaining " + scorePerSecond() + " Cookies per/s";
}

//timer function
function timer() {
  score += scorePerSecond();
  update();
}

setInterval(timer, 1000);

//onClick Event Listener Function
function init() {
  var cookie = document.getElementsByClassName('cookie')[0].getElementsByTagName('img')[0]; // Get the img element
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = score_div.innerHTML + score;

  cookie.addEventListener('click', function() { // This function will run on click!
    score = score + 1; // Increment the score by one
    var audio = document.getElementById("audio"); //Play audio on click
    audio.play();
    update()
  })
}

init(); // Call the init function

//save function
function save() {
  localStorage.setItem("score", score);

  for( i = 0; i < clickers.length; i++ )
    localStorage.setItem(i, clickers[i]);
}

//load function
function load() {
  score = localStorage.getItem("score");
  score = parseInt(score);
  score = score;

  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = 'Score: ' + score; // Update the score in the DOM

  for( i = 0; i < clickers.length; i++ )
    clickers[i] = parseInt(localStorage.getItem(i));
}

function scorePerSecond( ) {
  
  var tot = 0;

  for( i = 0; i < clickers.length; i++ )
    tot += clickers[i] * scoreMult[i];

  return tot;

}

function buy( index ) {

  if( score >= ( ( clickers[index] + 1 ) * costMult[index] ) ) {
    score = score - ( clickers[index] + 1 ) * costMult[index];
    clickers[index] = clickers[index] + 1;
    update();
  }

}
