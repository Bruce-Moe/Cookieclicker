var score = 0; // Define global variable to hold score

var autoclick = 0; //Autoclick upgrade variable

var farms = 0;  //Farm upgrade variable

//Buy autoclick function
function buyAutoClick() {
  if (score >= ((autoclick+1) * 12)) {
    score = score - ((autoclick+1) * 12);
    autoclick = autoclick + 1;
    update();
  }
}

//Update index.html text elements function
function update() {
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = 'Score: ' + score; // Update the score in the DOM
  var amount_div = document.getElementsByClassName('amountAutoClick')[0];
  amount_div.innerHTML= "You Own " + autoclick + " Autoclickers";
  var cost_div = document.getElementsByClassName('CostAutoClick')[0];
  cost_div.innerHTML= "Cost " + ((autoclick+1) * 12) + " Cookies";
  var amountfarms_div = document.getElementsByClassName("amountFarms")[0];
  amountfarms_div.innerHTML = "You Own " + farms + " Farms";
  var costfarms_div = document.getElementsByClassName("costFarm")[0];
  costfarms_div.innerHTML= "Cost " + ((farms+1) * 15) + " Cookies";
  var cookiespersec_div = document.getElementsByClassName("persecond")[0];
  cookiespersec_div.innerHTML= "You are gaining " + (((autoclick)+(farms*2))*multiplier) + " Cookies per/s";
}

//multiplier variable
var multiplier = 1;

//timer function
function timer() {
  score = score + autoclick;
  update()
  score = score + farms*2;
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
  localStorage.setItem("autoclick", autoclick);
  localStorage.setItem("farms", farms);
}

//load function
function load() {
  score = localStorage.getItem("score");
  score = parseInt(score);
  score = score;
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = 'Score: ' + score; // Update the score in the DOM
  autoclick = localStorage.getItem("autoclick");
  autoclick = parseInt(autoclick);
  farms = localStorage.getItem("farms");
  farms = parseInt(farms);
}

//Buy farm function
function buyFarm() {
  if (score >= ((farms+1)*15)) {
    score = score - ((farms+1)*15);
    farms = farms + 1;
    update();
  }
}
