var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-button");
var $questionPrompt = document.querySelector("#question-prompt");
var $questionText = document.querySelector("#question-text");
var $questionOptions = document.querySelector("#options");
var $timer = document.querySelector("#timer");
var $score = document.querySelector("#score");
$rightReveal = document.querySelectorAll("#rightReveal");
$wrongReveal = document.querySelectorAll("#wrongReveal");
var $answerA = document.querySelector("#answerA");
var $answerB = document.querySelector("#answerB");
var $answerC = document.querySelector("#answerC");
var $answerD = document.querySelector("#answerD");

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

// e in the anon function param
$startBtn.addEventListener("click", function () {
    $startPrompt.classList.add("hide");
    $questionPrompt.classList.remove("hide")
    $timer.classList.remove("hide")
    $score.classList.remove("hide")
    startTimer();
    $questionText.textContent = questions[0].text;

    questions[0].options.forEach(function (item) {
      var $btn = document.createElement("button");
      $btn.textContent = item;
      $questionOptions.append($btn);
    })
})

callQuestion();

function callQuestion(){
    // get first question from questions array
    // populate that question on screen
    $questionText.append(questions[0].text);
    console.log($questionOptions)
    // get first answer choices from questions array
    
    $answerA.append(questions[0].options[0])
    $answerB.append(questions[0].options[1])
    $answerC.append(questions[0].options[2])
    $answerD.append(questions[0].options[3])
    
    
    
    console.log($answerA)
    
    // populate those answer choices on screen
}

// https://www.codeproject.com/Questions/701607/How-to-return-value-from-onclick-event-in-javascri
// function listIndex(index) {
//     if (index === '0') {
//         console.log("wrong")
//         $score.append(1);
//     }
// }

// onclick="return listIndex('3')" on li

// timer
function startTimer() {
    var timeLeft = 100;
  
    var timerInterval = setInterval(function () {
      if (timeLeft > 1) {
        $timer.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        $timer.textContent = timeLeft;
        timeLeft--;
      } else {
        $timer.textContent = 0;
        // clearInterval(timeLeft);
      }
      // when timer hits 0, end game
    }, 1000);
    return timeLeft
  }