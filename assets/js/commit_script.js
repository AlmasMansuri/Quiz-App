let startButton = document.querySelector("#start");
let timerElement = document.querySelector("#time");
let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let options = document.querySelector("#choices");
let currentScore = document.querySelector("#currScore");
let result = document.querySelector("#res");
let endScreen = document.querySelector("#end-screen");
let initialEl = document.querySelector("#initials");
let finalScore = document.querySelector("#final-score");
let submitBtn = document.querySelector("#submit");

//--------------------Questions---------------------------

let questions = [
  {
    que: "What is the largest mammal on Earth?",
    opt: ["1. Elephant", "2. Blue whale", "3. Giraffe", "4. Polar bear"],
    ans: "2. Blue whale",
  },
  {
    que: "Which bird is known for its ability to mimic human speech?",
    opt: ["1. Eagle", "2. Parrot", "3. Penguin", "4. Owl"],
    ans: "2. Parrot",
  },
  {
    que: "What is the primary diet of pandas?",
    opt: ["1. Meat", "2. Bamboo", "3. Fish", "4. Insects"],
    ans: "2. Bamboo",
  },
  {
    que: "Which of the following animals is a marsupial?",
    opt: ["1. Kangaroo", "2. Elephant", "3. Cheetah", "4. Giraffe"],
    ans: "1. Kangaroo",
  },
  {
    que: "What is the only mammal capable of sustained flight?",
    opt: ["1. Bat", "2. Pegasus", "3. Eagle", "4. Flying squirrel"],
    ans: "1. Bat",
  },
  {
    que: "Which snake is known for its ability to spit venom at its prey?",
    opt: ["1. Python", "2. King cobra", "3. Rattlesnake", "4. Anaconda"],
    ans: "3. Rattlesnake",
  },
  {
    que: "What is the largest big cat in the world?",
    opt: ["1. Leopard", "2. Lion", "3. Tiger", "4. Cheetah"],
    ans: "3. Tiger",
  },
  {
    que: "Which ocean creature is capable of regenerating its arms?",
    opt: ["1. Dolphin", "2. Octopus", "3. Shark", "4. Sea turtle"],
    ans: "2. Octopus",
  },
  {
    que: "What is the fastest land animal?",
    opt: ["1. Elephant", "2.Cheetah", "3. Horse", "4. Gazelle"],
    ans: "2. Cheetah",
  },
  {
    que: "What is the natural habitat of a penguin?",
    opt: [
      "1. Desert",
      "2. Rainforest",
      "3. Arctic tundra",
      "4. Antarctic ice pack",
    ],
    ans: "4. Antarctic ice pack",
  },
];

//---------------------Highscore----------------------------------------
let highscore = JSON.parse(localStorage.getItem("highScore"));
if (highscore == null) {
  highscore = [];
}
console.log(highscore);
//---------------------Timer & start quiz click------------------------------//

let timerOnDisplay = 25;
let timer;

function startTimer() {
  timer = setInterval(function () {
    timerOnDisplay--;
    timerElement.textContent = timerOnDisplay;
    if (timerOnDisplay === 0) {
      clearInterval(timer);
      showEnd("time up");
    }
  }, 1000);
}

startButton.addEventListener("click", quizStart);

function quizStart() {
  console.log("quiz start Called");
  startTimer();
  startScreen.setAttribute("class", "hide");
  questionScreen.setAttribute("class", "start");

  showQues();
}

/*--------------------------Questions and options--------------------------*/

let currQuestion = 0;
let score = 0;

function showQues() {
  questionTitle.textContent = questions[currQuestion].que;
  let prepOpt = "";

  for (let i = 0; i < questions[currQuestion].opt.length; i++) {
    prepOpt +=
      '<button class="opt">' + questions[currQuestion].opt[i] + "</button>";
  }

  choices.innerHTML = prepOpt;

  let optnBtn = document.querySelectorAll(".opt");

  for (let i = 0; i < optnBtn.length; i++) {
    optnBtn[i].addEventListener("click", function () {
      if (optnBtn[i].innerHTML == questions[currQuestion].ans) {
        result.innerHTML = "Right Answer";
        score += 10;
      } else {
        result.innerHTML = "Wrong Answer";
        score -= 5;
      }
      currentScore.innerHTML = score;
      currQuestion++;

      if (currQuestion < questions.length) {
        showQues();
      } else {
        showEnd();
      }
    });
  }
}

let showEnd = function (arg) {
  if (arg == "time up") {
    let endSc = document.querySelector("#endSc");
    endSc.innerHTML = "Time up!!";
  }
  clearInterval(timer);
  questionScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start");
  finalScore.innerHTML = score;
  submitBtn.addEventListener("click", () => {
    let obj = { initial: initialEl.value, score };
    highscore.push(obj);
    console.log(highscore);
    localStorage.setItem("highScore", JSON.stringify(highscore));
    window.location.href = "highscores.html";
  });
};
