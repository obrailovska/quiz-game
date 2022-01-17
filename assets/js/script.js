var startButton = document.getElementById("start");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var shuffledQuestions, currentQuestionIndex;
function startGame() {
  console.log("started");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex;
}

function setNextQuestion() {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
}
function selectAnswer() {}

startButton.addEventListener("click", startGame);

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
];
