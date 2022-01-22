var startButton = document.getElementById("start");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var section = document.getElementById("start-quiz");
var questionIndex = 0;
var counter = 0;
var timerId;
var timeLeft = 1;
var timesUp;
var scoreResult = 0;
var highScoreInitial = "";

var questions = [
  {
    question: "Commonly used data types do NOT include",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: true },
      { text: "alerts", correct: false },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    answers: [
      { text: " numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: " booleans", correct: true },
      { text: "all of the above", correct: false },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables. ",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: true },
      { text: "quotes", correct: false },
      { text: "parenthases", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
      { text: "Javascript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: true },
      { text: "console.log", correct: false },
    ],
  },
  {
    question: "The first index of an array is ____ ",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: true },
      { text: "2", correct: false },
      { text: "any", correct: false },
    ],
  },
  {
    question: "Who invented JavaScript",
    answers: [
      { text: "Douglas Crockford", correct: false },
      { text: "Sheryl Sandberg", correct: false },
      { text: "Ben Javascript", correct: false },
      { text: "Brendan Eich", correct: true },
    ],
  },
];

document.getElementById("start").addEventListener("click", function () {
  var quizGame = document.getElementById("hide");
  if (quizGame.style.display === "" || quizGame.style.display === "none") {
    quizGame.style.display = "block";
    section.style.display = "none";
  } else {
    quizGame.style.display === "none";
  }
  startGame();
});

// start timer & ask question
function startGame() {
  console.log("0");
  timer();

  createQuestion(questionIndex);
}

// countdown handler
function timer() {
  timerId = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft < 0) {
      showGameOver();
      clearTimeout(timerId);
      return;
    } else {
      $("#rem-time").text(timeLeft);
      timeLeft--;
    }
  }
}

// get a question
// create html element for question
function createQuestion(questionIndex) {
  console.log("1");
  const question = questions[questionIndex];

  var title = $("<h2>");
  title.text("Question: " + question.question);
  $("#question").append(title);

  for (var i = 0; i < question.answers.length; i++) {
    var btn = $("<button>");
    btn.text(question.answers[i].text);
    btn.attr("class", "ans-btn");
    btn.attr("value", question.answers[i].correct);
    btn.on("click", selectAnswer);
    $("#answer-buttons").append(btn);
  }
}

// handle answer btn click
function selectAnswer() {
  console.log("2");
  if (this.value === "true") {
    alert("true");
    scoreResult++;
    console.log("your current score is " + scoreResult);

    clearQuestionsAndAnswers();
    questionIndex++;
    createQuestion(questionIndex);
  } else {
    this.value === "false";
    alert("false");
    timeLeft -= 10;
    // counter(timeLeft - 10);
    clearQuestionsAndAnswers();
    questionIndex++;
    createQuestion(questionIndex);
  }
}
// false
// take 10 seconds off

// clear Q&A
function clearQuestionsAndAnswers() {
  console.log("clearing Q&A");
  $("#question").empty();
  $("#answer-buttons").empty();
}

// clear timer
function clearTimer() {
  console.log("clearing Q&A");
  $(".timer").empty();
}

// create gameOver
// append to container
function showGameOver() {
  console.log("Game Over");
  var initial = prompt("Enter your initials");
  highScoreInitial = initial;
  console.log(highScoreInitial);

  clearQuestionsAndAnswers();

  clearTimer();
  highScore();

  // create html game over element
  // append to #container
}
function highScore() {
  $("#score-result").append(highScoreInitial);
  $("#high-score").append(scoreResult);

  // console.log(highScoreResult);
  //   console.log(initialResult);
}
