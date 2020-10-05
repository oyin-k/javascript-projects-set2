const quizData = [
  {
    question: "Who is the current president of Nigeria?",
    a: "Donal Trump",
    b: "Muhammadu Buhari",
    c: "Olusegun Obasanjo",
    d: "Yemi Osibanjo",
    correct: "b",
  },
  {
    question: "What is the best Javascript frontend framework/library?",
    a: "Angular",
    b: "Svelte",
    c: "React",
    d: "Vue",
    correct: "c",
  },
  {
    question: "What is the capital of the country Nigeria?",
    a: "Abuja",
    b: "Lagos",
    c: "Osun",
    d: "Kano",
    correct: "a",
  },
  {
    question: "Who won the 2018 FIFA World cup?",
    a: "Croatia",
    b: "Argentina",
    c: "Portugal",
    d: "France",
    correct: "d",
  },
  {
    question: "How many NBA championships does Kobe Bryant have?",
    a: "3",
    b: "6",
    c: "8",
    d: "5",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Your final score is ${score}/${quizData.length}.</h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});
