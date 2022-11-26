function init() {
  window.onload = () => {
    showScore("Scoreboard", 0, 0);
  };
}

init();
let choose;
let compMove;
let num;
let score;
let playerScore = 0;
let compScore = 0;

let tableBoard = document.querySelector(".table");
playerScorePoint = document.querySelector(".playerScore");
compScorePoint = document.querySelector(".compScore");

let restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
  restartGame();
});

function showScore(tab, player, comp) {
  playerScore = player;
  playerScorePoint.innerHTML = playerScore;

  compScore = comp;
  compScorePoint.innerHTML = compScore;

  if (compScore == 5) {
    score = "Comp Wins!";
    lockButtons();
  } else if (playerScore == 5) {
    score = "Player Wins!";
    lockButtons();
  } else {
    score = tab;
  }

  tableBoard.innerHTML = score;
}

function lockButtons() {
  document.querySelector(".paper").disabled = true;
  document.querySelector(".sissors").disabled = true;
  document.querySelector(".rock").disabled = true;
}

function unlockButtons() {
  document.querySelector(".paper").disabled = false;
  document.querySelector(".sissors").disabled = false;
  document.querySelector(".rock").disabled = false;
}

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  choose = "paper";
  computerMove();
  game();
});

let sissors = document.querySelector(".sissors");
sissors.addEventListener("click", () => {
  choose = "sissors";
  computerMove();
  game();
});

let rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  choose = "rock";
  computerMove();
  game();
});

function computerMove() {
  num = Math.random();

  if (num >= 0 && num <= 0.33) {
    compMove = "paper";
  } else if (num > 0.33 && num <= 0.66) {
    compMove = "sissors";
  } else if (num > 0.66 && num <= 1) {
    compMove = "rock";
  }
}

function game() {
  switch (true) {
    case compMove == "paper" && choose == "paper":
      showScore("Remis", playerScore, compScore);
      break;
    case compMove == "paper" && choose == "sissors":
      playerScore++;
      showScore("Player wins round", playerScore, compScore);
      break;
    case compMove == "paper" && choose == "rock":
      compScore++;
      showScore("Comp wins round", playerScore, compScore);
      break;
    case compMove == "sissors" && choose == "paper":
      compScore++;
      showScore("Comp wins round", playerScore, compScore);
      break;
    case compMove == "sissors" && choose == "sissors":
      showScore("Remis", playerScore, compScore);
      break;
    case compMove == "sissors" && choose == "rock":
      playerScore++;
      showScore("Player wins round", playerScore, compScore);
      break;
    case compMove == "rock" && choose == "paper":
      playerScore++;
      showScore("Player wins round", playerScore, compScore);
      break;
    case compMove == "rock" && choose == "sissors":
      compScore++;
      showScore("Comp wins round", playerScore, compScore);
      break;
    case compMove == "rock" && choose == "rock":
      showScore("Remis", playerScore, compScore);
      break;
  }
}

function restartGame() {
  showScore("Tablica wyników", 0, 0);
  unlockButtons();
}
