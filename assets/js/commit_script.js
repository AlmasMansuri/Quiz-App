let startButton = document.querySelector("#start");
let timerElement = document.querySelector("#time");
let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector("#questions");
// let questionTitle = document.querySelector("#question-title");
// let options = document.querySelector("#choices");
// let currentscore = document.querySelector("#currScore");
// let result = document.querySelector("#res");
// let submit = document.querySelector("#submit");
// let initial = document.querySelector("#initials");
// let finalscore = document.querySelector("#final-score");

//---------------------Timer & start quiz click------------------------------//

let timerOnDisplay = 10;
let timer;

function startTimer() {
  timer = setInterval(function () {
    timerOnDisplay--;
    timerElement.textContent = timerOnDisplay;
    if (timerOnDisplay === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

startButton.addEventListener("click", quizStart);

function quizStart() {
  console.log("quiz start Called");
  startTimer();
  startScreen.setAttribute("class", "hide");
  questionScreen.setAttribute("class", "start");
}
