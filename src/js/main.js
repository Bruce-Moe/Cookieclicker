var score = 0; // Define global variable to hold score

var clickerNames = ["Autoclickers", "Farms"];
var clickers = [0, 0]; 
var costMult = [12, 45];
var scoreMult = [1, 5];

//Update index.html text elements function
function update() {
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = 'Score: ' + score; // Update the score in the DOM

  for( i = 0; i < clickers.length; i++ ) {
    var amount_div = document.getElementsByClassName("amountClickers")[i];
    amount_div.innerHTML = "You Own " + clickers[i] + " " + clickerNames[i];

    var cost_div = document.getElementsByClassName("costClickers")[i];
    cost_div.innerHTML = "Cost " + ( ( clickers[i] + 1 ) * costMult[i] )+ " " + " Cookies";
  }

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
