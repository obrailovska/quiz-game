var startButton = document.getElementById("start");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var section = document.getElementById("start-quiz");
var counter = 0;
var timerId;
var timeLeft = 60;
var questions = [
  {
    question: "Commonly used data types do NOT include",
    answers: [
      { text: "strings", correct: true },
      { text: "booleans", correct: false },
      { text: "alerts", correct: false },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "bla bla bla bla ",
    answers: [
      { text: "strings", correct: true },
      { text: "booleans", correct: false },
      { text: "alerts", correct: false },
      { text: "numbers", correct: false },
    ],
  },
];

function timer() {
  timerId = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft === -1) {
      clearTimeout(timerId);
      //resultCount()
    } else {
      $("#rem-time").text(timeLeft);
      timeLeft--;
    }
  }
}

function selectAnswer() {
  console.log("inside button click");
  if (counter === questions.length - 1) {
    //calla a function to end quiz and display section with textbox and a button to add initials
  } else {
    counter++;
  }
  var ans = this.value;
  console.log(ans);
}

document.querySelector("button").addEventListener("click", function () {
  // e.preventDefault();
  var quizGame = document.querySelector("#hide");
  if (quizGame.style.display === "" || quizGame.style.display === "none") {
    quizGame.style.display = "block";
    section.style.display = "none";
  } else {
    quizGame.style.display === "none";
  }
  timer();
  quiz();
});

function quiz() {
  var q = $("<h4>");
  q.text(questions[counter].question);
  $("#question-container").append(q);
  for (var i = 0; i < questions[counter].answers.length; i++) {
    var btn = $("<button>");
    btn.text(questions[counter].answers[i].text);
    btn.attr("class", "ans-btn");
    btn.attr("data-correct", questions[counter].answers[i].correct);
    btn.attr("value", questions[counter].answers[i].correct);
    btn.onclick = selectAnswer;
    $("#question-container").append(btn);
  }
}
// function startGame() {
//   console.log("started");
//   section.classList.add("hide");
// }
// startButton.addEventListener("click", startGame);
// questionElement;
// answerButtonsElement.addEventListener("click", selectAnswer);
