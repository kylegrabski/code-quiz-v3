var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-button");
var $questionPrompt = document.querySelector("#question-prompt");
var $questionText = document.querySelector("#question-text");
var $questionOptions = document.querySelector("#options");
var $timer = document.querySelector("#timer");
var $score = document.querySelector("#score");
var $resetBtn = document.querySelector("#reset-button");
var $highScoreBtn = document.querySelector("#high-score");
var $viewHighScore = document.querySelector("#highScore");
var $hideScoreBtn = document.querySelector("#hide-score");

var timerInterval;

var questionIndex = 0;

var scoreBoard = 0;

var timeLeft = 100;

var questions = [
  {
    text: "What is my name?",
    correctAnswer: "Kyle",
    options: ["Kyle", "Ollie", "Michael", "Steve"],
  },
  {
    text: "Is the sky blue?",
    correctAnswer: "True",
    options: ["True", "False"],
  },
  {
    text: "What is my tortoise's name?",
    correctAnswer: "Gordon",
    options: ["Buck", "Dude", "Torta", "Gordon"],
  },
  {
    text: "What is a JavaScript Primitive object?",
    correctAnswer: "String",
    options: ["RAM", "Yarn", "String"],
  },
  {
    text: "A ______ is a named variable passed into a function",
    correctAnswer: "Parameter",
    options: ["Parameter", "Function()", "Method()", "Logical Operator"],
  },
];
// added event listener of click to Start button
$startBtn.addEventListener("click", function (e) {
  // clicking start button will hide the main prompt
  $startPrompt.classList.add("hide");
  // will show the question
  $questionPrompt.classList.remove("hide");
  // will show the timer
  $timer.classList.remove("hide");
  // will show the score
  $score.classList.remove("hide");
  // will show the reset button
  $resetBtn.classList.remove("hide");
  startTimer();
  renderQuestion();
});

// Render Question
function renderQuestion() {
  //
  // get the questions from the questions array
  $questionText.textContent = questions[questionIndex].text;
  // clears out the buttons after click
  $questionOptions.innerHTML = "";
  // creates a button for each of the answer choices
  questions[questionIndex].options.forEach(function (item) {
    var $btn = document.createElement("button");
    $btn.textContent = item;
    $questionOptions.append($btn);
  });
}

// Walk through this with Jeremy
$questionOptions.addEventListener("click", function (e) {
  // if tartget is not a button exit early
  if (!e.target.matches("button")) return;
  var val = e.target.textContent;
  if (val === questions[questionIndex].correctAnswer) {
    // add one to the score
    scoreBoard++;
    // Shows the score on the HTML
    $score.textContent = scoreBoard;     
    console.log(scoreBoard)
  }
  
  else {
    // deduct time from timer
    timeLeft= timeLeft-20;
    $timer.textContent = timeLeft;
  }
  questionIndex++;
  if (questionIndex === questions.length) {
    // End Game

    // $endGame.classList.remove("hide");
    // var endGameText = $endGame.createElement()
    saveScore();
  } else {
    renderQuestion();
  }
  console.log(val);
});

function saveScore () {
  // save value to local storage
  var userArray = [];
  var scoreArray = [];
  localStorage.setItem("Score", JSON.stringify(scoreBoard));
  // save user initials input
var userName = prompt("Enter you initials to save");
// saves initial s to local storage
localStorage.setItem("User", JSON.stringify(userName));
}

// write foreach to get array items into view
function viewScore () {
  $hideScoreBtn.classList.remove("hide");
  $highScoreBtn.classList.add("hide");
console.log("view high scores called")
var currentScore = localStorage.getItem("Score");
var currentUser = localStorage.getItem("User");
console.log("currentScore", currentScore);
console.log("currentUser", currentUser);
// print values on screen
$viewHighScore.classList.remove("hide");
var $scoreValue = document.createElement("p");
$scoreValue.innerText = `${currentUser} earned a score of ${currentScore} `
$viewHighScore.append($scoreValue);
}
$hideScoreBtn.addEventListener("click", function(){
  // hide itself
  $hideScoreBtn.classList.add("hide");
  $highScoreBtn.classList.remove("hide");
$viewHighScore.innerHTML = "";
  console.log("click")
})
$highScoreBtn.addEventListener("click", viewScore);

// timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    $timer.textContent = timeLeft;
    if (timeLeft === 0) {
      // End the game
      // Stop the timer
      clearInterval(timerInterval);
    }
    // when timer hits 0, end game
  }, 1000);
  return timeLeft;
}

