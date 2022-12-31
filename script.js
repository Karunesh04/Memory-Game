const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const cardOneId = cardChosenId[0];
  const cardTwoId = cardChosenId[1];

  if (cardOneId == cardTwoId) {
    cards[cardOneId].setAttribute("src", "images/blank.png");
    cards[cardTwoId].setAttribute("src", "images/blank.png");
    alert("You clicked the same image!");
  }

  if (cardChosen[0] == cardChosen[1]) {
    alert("You found a Match!");
    cards[cardOneId].setAttribute("src", "images/white.png");
    cards[cardTwoId].setAttribute("src", "images/white.png");
    cards[cardOneId].removeEventListener("click", flipCard);
    cards[cardTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[cardOneId].setAttribute("src", "images/blank.png");
    cards[cardTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again!");
  }

  cardChosen = [];
  cardChosenId = [];
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you found them all!";
  } else resultDisplay.innerHTML = cardsWon.length;
}
