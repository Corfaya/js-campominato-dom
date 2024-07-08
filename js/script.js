// elements recovery
const grid = document.getElementById("grid");
const btn = document.getElementById("play");
const level = document.getElementById("level");
const points = document.querySelector(".score");
const winScreen = document.querySelector(".win")
const defeatScreen = document.querySelector(".defeat")

// number of bombs
const BOMBS = 16;
// Global flag variable
let gameOn = true;
// empty array for bombs
let bombsArr = [];
// score variable
let score = 0;

// click event on btn
btn.addEventListener("click", newGame);

// ===== FUNCTIONS =====
// bombs generation function
function bombsGenerator(cells) {
  bombsArr = []; // array reset
  while (bombsArr.length < BOMBS) {
    let random = Math.floor(Math.random() * cells) + 1;
    if (!bombsArr.includes(random)) {
      bombsArr.push(random);
    }
  }
  // check array on console
  console.log(bombsArr);
}

// div creation function
function createDivSquare(diff) {
  let currentElement = document.createElement("div");
  currentElement.classList.add("square");
  currentElement.classList.add(diff);
  return currentElement;
}

// game over function
function gameOver() {
  gameOn = false;
  revealBombs();
  defeatScreen.classList.remove("d-none")
}

// reveal all bombs function
function revealBombs() {
  let squares = document.querySelectorAll(".square");
  for (let k = 0; k < squares.length; k++) {
    if (bombsArr.includes(k)) {
      let squareVisible = squares[k-1];
      squareVisible.classList.add("clicked-red");
    }
  }
}

// new game function
function newGame() {
    winScreen.classList.add("d-none")
    defeatScreen.classList.add("d-none")
  grid.innerHTML = "";
  gameOn = true;
  score = 0;
  points.innerHTML = "Punteggio: " + score;
  let levelSelection = level.value;
  let squareLength;
  let squareClass;
  if (levelSelection == 1) {
    squareLength = 100;
    squareClass = "easy-squares";
  } else if (levelSelection == 2) {
    squareLength = 81;
    squareClass = "medium-squares";
  } else if (levelSelection == 3) {
    squareLength = 49;
    squareClass = "hard-squares";
  } else {
    squareLength = 100;
    squareClass = "easy-squares";
  }
  bombsGenerator(squareLength);
  let square;
  for (let k = 0; k < squareLength; k++) {
    square = createDivSquare(squareClass);
    square.addEventListener("click", function () {
      // if gameOn is true and the cell is not clicked
      if (
        gameOn &&
        !this.classList.contains("clicked-azure") &&
        !this.classList.contains("clicked-red")
      ) {
        // if it's a bomb
        if (bombsArr.includes(k + 1)) {
          this.classList.add("clicked-red");
          gameOver();
          points.innerHTML = "Punteggio: " + score;
          console.log("Hai pestato una bomba. Ricomincia");
        } else {
          this.classList.add("clicked-azure");
          score++;
          points.innerHTML = "Punteggio: " + score;
          console.log("Hai clickato su " + (k + 1));
          if (score == squareLength - BOMBS) {
            console.log("YOU WIN")
            winScreen.classList.remove('d-none');
          }
        }
      } else {
        console.log("Non puoi fare click sulla stessa cella.");
      }
    });
    square.innerText = k + 1;
    grid.append(square);
  }
}
