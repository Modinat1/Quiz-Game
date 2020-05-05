    
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


let questions = [
    {
      question: "AIDs is caused by what??",
      choice1: "Fungi",
      choice2: "Virus",
      choice3: "Bacteria",
      choice4: "Algae",
      answer: 2
    },
    {
      question:
        "November 14, is internationally recognised as?",
      choice1: "World's toilet day",
      choice2: "World's left-handed day",
      choice3: "World's philosophy day",
      choice4: "Universal children's day",
      answer: 4
    },
    {
      question: "Another name for interpersonal communication is?",
      choice1: "Triadic communication",
      choice2: "Mass communication",
      choice3: "Dyadic communication",
      choice4: "Trans communication",
      answer: 3
    },
  
  {
      question: "World's first camel hospital is located in which city?",
      choice1: "Bikaner",
      choice2: "Dubai",
       choice3: "Jaipur",
       choice4: "Chivita",
       answer: 2
      
  },
    {
        question: "Body Temperature is regulated by?",
        choice1: "hypothalamus",
        choice2: "cerebellum",
        choice3: "medulla",
        choice4: "cerebral",
        answer: 1
        }
  ];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();