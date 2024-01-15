let lst = document.querySelector("#highscores");
let clrBtn = document.querySelector("#clear");

let highscore = JSON.parse(localStorage.getItem("highScore"));

let scores =
  highscore != null
    ? highscore
        .map(function (ele) {
          return `<li>${ele.initial} : ${ele.score}</li>`;
        })
        .join("")
    : "";

lst.innerHTML = scores;

clrBtn.addEventListener("click", function () {
  localStorage.setItem("highScore", null);
  location.reload();
});
