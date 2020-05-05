const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();
};

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