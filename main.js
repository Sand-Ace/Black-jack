let firstcard = 2;
let secondcard = 13;
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let isAlive = true;
let hasBlackJack = false;

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  //   console.log("Button is working");

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "You've got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let newCard = 7;
  sum += newCard;
  cards.push(newCard);
  renderGame();
}

// array practice -----
let featuredPosts = [
  "Check out my new Netflix clone",
  "Here's the code for my projects",
  "I've relaunched the website",
];
