const cards = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language. It structures content on web pages.",
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets. It styles and layouts web pages.",
  },
  {
    question: "What is JavaScript?",
    answer:
      "A programming language that adds interactivity and dynamic behavior to websites.",
  },
  {
    question: "What is an array in JavaScript?",
    answer:
      "An array is a data structure that stores multiple values in a single variable.",
  },
  {
    question: "What is a function?",
    answer: "A reusable block of code designed to perform a particular task.",
  },
  {
    question: "What does DOM stand for?",
    answer:
      "Document Object Model. It represents a web page as objects that JavaScript can access and modify.",
  },
  {
    question: "What is the purpose of a loop?",
    answer:
      "A loop repeats a block of code while a condition is satisfied or for a specified number of times.",
  },
  {
    question: "What is an object in JavaScript?",
    answer:
      "An object stores related data and functionality as key-value pairs.",
  },
  {
    question: "What does API stand for?",
    answer:
      "Application Programming Interface. It allows software systems to communicate with each other.",
  },
  {
    question: "What is responsive web design?",
    answer:
      "A design approach that makes websites adapt to different screen sizes and devices.",
  },
];

let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const cardContainer = document.getElementById("card-container");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const cardCounter = document.getElementById("card-counter");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const flipButton = document.getElementById("flip-btn");

function displayCard() {
  const card = cards[currentIndex];

  questionElement.textContent = card.question;
  answerElement.textContent = card.answer;

  const currentCard = currentIndex + 1;
  const totalCards = cards.length;

  progressText.textContent = `${currentCard} / ${totalCards}`;
  cardCounter.textContent = `Card ${currentCard} of ${totalCards}`;

  progressFill.style.width = `${(currentCard / totalCards) * 100}%`;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalCards - 1;

  flashcard.classList.remove("flipped");
}

function flipCard() {
  flashcard.classList.toggle("flipped");
}

function nextCard() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    displayCard();
  }
}

function previousCard() {
  if (currentIndex > 0) {
    currentIndex--;
    displayCard();
  }
}

cardContainer.addEventListener("click", flipCard);
flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", previousCard);

displayCard();
