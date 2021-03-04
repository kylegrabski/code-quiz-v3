var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-button");
var $questionPrompt = document.querySelector("#question-prompt");
var $questionText = document.querySelector("#question-text");
var $questionOptions = document.querySelector("#options");
var $timer = document.querySelector("#timer");
var $score = document.querySelector("#score");
var $rightReveal = document.querySelector("#rightReveal");
var $wrongReveal = document.querySelector("#wrongReveal");
var $resetBtn = document.querySelector("#reset-button");
var timerInterval;
var questionIndex = 0;
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
  $questionText.textContent = questions[questionIndex].text;
  $questionOptions.innerHTML = "";
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
    console.log("you are correct");
  } else {
    console.log("you are wrong");
  }
  questionIndex++;
  if (questionIndex === questions.length) {
    // End Game
  } else {
    renderQuestion();
  }
  console.log(val);
});

// timer
function startTimer() {
  var timeLeft = 10;
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







// function callQuestion(){
//     // get first question from questions array
//     // populate that question on screen
//     $questionText.append(questions[0].text);
//     console.log($questionOptions)
//     // get first answer choices from questions array
//     $answerA.append(questions[0].options[0])
//     $answerB.append(questions[0].options[1])
//     $answerC.append(questions[0].options[2])
//     $answerD.append(questions[0].options[3])
//     console.log($answerA)
//     // populate those answer choices on screen
// }
// https://www.codeproject.com/Questions/701607/How-to-return-value-from-onclick-event-in-javascri
// function listIndex(index) {
//     if (index === '0') {
//         console.log("wrong")
//         $score.append(1);
//     }
// }
// onclick="return listIndex('3')" on li
