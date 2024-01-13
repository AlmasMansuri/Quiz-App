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

//--------------------Questions---------------------------
let questions = [
  {
    que: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue whale", "Giraffe", "Polar bear"],
    ans: "Blue whale",
  },
  {
    que: "Which bird is known for its ability to mimic human speech?",
    options: ["Eagle", "Parrot", "Penguin", "Owl"],
    ans: "Parrot",
  },
  {
    que: "What is the primary diet of pandas?",
    opt: ["Meat", "Bamboo", "Fish", "Insects"],
    ans: "Bamboo",
  },
  {
    que: "Which of the following animals is a marsupial?",
    opt: ["Kangaroo", "Elephant", "Cheetah", "Giraffe"],
    ans: "Kangaroo",
  },
  {
    que: "What is the only mammal capable of sustained flight?",
    opt: ["Bat", "Pegasus", "Eagle", "Flying squirrel"],
    ans: "Bat",
  },
  {
    que: "Which snake is known for its ability to spit venom at its prey?",
    opt: ["Python", "King cobra", "Rattlesnake", "Anaconda"],
    ans: "Rattlesnake",
  },
  {
    que: "What is the largest big cat in the world?",
    opt: ["Leopard", "Lion", "Tiger", "Cheetah"],
    ans: "Tiger",
  },
  {
    ques: "Which ocean creature is capable of regenerating its arms?",
    opt: ["Dolphin", "Octopus", "Shark", "Sea turtle"],
    ans: "Octopus",
  },
  {
    que: "What is the fastest land animal?",
    opt: ["Elephant", "Cheetah", "Horse", "Gazelle"],
    ans: "Cheetah",
  },
  {
    que: "What is the natural habitat of a penguin?",
    opt: ["Desert", "Rainforest", "Arctic tundra", "Antarctic ice pack"],
    ans: "Antarctic ice pack",
  },
];

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
