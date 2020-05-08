const startButton = document.getElementById("start-btn");
const welcomePage = document.getElementById("quiz-fp");
const finalScore = document.getElementById("quiz-lp");
const quizQuestions = document.getElementById("qst-cont");
let q1 = document.getElementById("qsts");
let btn1 = document.getElementById("a");
let btn2 = document.getElementById("b");
let btn3 = document.getElementById("c");
let btn4 = document.getElementById("d");
const nextButton = document.getElementById("nxt-btn");
const allOption = document.getElementById("opt-cont").children;
let scoreRec = document.getElementsByClassName("result");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

// Tracks the index of the 'question' property in the 'questions' array of objects
let questionIndex = 0;
let score = 0;

// For start button to start quiz
function startQuiz() {
  console.log("start Quiz!");
  welcomePage.classList.add("hide");
  quizQuestions.classList.remove("hide");
  nextQuestion();
}

// For next button to go to next quiz
function nextQuestion() {
  // shows the result page after the fifth question
  if (questionIndex == 5) {
    quizQuestions.classList.add("hide");
    finalScore.classList.remove("hide");
  }
  showQuestions();
  reset();
  questionIndex++;
}

// Shows the questions
function showQuestions() {
  let q = questions[questionIndex];
  q1.innerHTML = q.question;
  btn1.innerHTML = q.options[0];
  btn2.innerHTML = q.options[1];
  btn3.innerHTML = q.options[2];
  btn4.innerHTML = q.options[3];
}

// To verify the chosen option
function checkAnswer(option) {
  // To make the questionIndex start from 0 again
  let q = questions[questionIndex - 1];
  if (option.id == q.answer) {
    option.classList.add("correct");
    score++;
    scoreKeeper();
  } else {
    option.classList.add("wrong");
  }
  optionInvalid();
}

//To mmake other options unclickable
function optionInvalid() {
  let q = questions[questionIndex - 1];
  for (let i = 0; i < allOption.length; i++) {
    allOption[i].classList.add("invalid");
    if (allOption[i].id == q.answer) {
      allOption[i].classList.add("correct");
    }
  }
}

// resets the class of the buttons
function reset() {
  for (let i = 0; i < allOption.length; i++) {
    allOption[i].classList.remove("correct", "wrong", "invalid");
  }
}

// Keeps record of the questions gotten correctly
function scoreKeeper() {
  // iterates the modification of scores on question page and
  // final result page
  for (let i = 0; i < scoreRec.length; i++) {
    scoreRec[i].innerHTML = `YOU'VE SCORED: ${score}`;
  }
}

const questions = [
  {
    question: "Who is the president of Nigeria?",
    options: [
      "Adetunji Adelana",
      "Yemi Osinbajo",
      "Mohamodu Buhari",
      "Goodluck Jonathan",
    ],
    answer: "c",
  },
  {
    question: "Who is the current chief of justices of Nigeria?",
    options: [
      "Afolayan Toluwalope",
      "Adetunji Adelana",
      "Ibrahim Tanko Muhammad",
      "John Oranbunde",
    ],
    answer: "c",
  },
  {
    question: "Which is the most populated country in the world?",
    options: ["China", "America", "Nigeria", "UK"],
    answer: "a",
  },
  {
    question: "Nigeria’s Inspector General of Police is?",
    options: ["Ibrahim Idris", "Jude Obi", "Adamu Mohammed", "Adedeji Kolade"],
    answer: "c",
  },
  {
    question: "Who is Nigeria’s Minister of Power?",
    options: ["Akpan Okon", "Sale Mamman", "Joy Okani", "Tolu Adelabu"],
    answer: "b",
  },
];
