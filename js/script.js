// elements recovery
const grid = document.getElementById("grid");
const btn = document.getElementById("play");
const points = document.querySelector(".score");

// number of bombs
const BOMBS = 16;
// Global flag variable
let gameOn = true;
// empty array for bombs
let bombsArr = [];
// score variable
let score = 0;
// Points
points.innerHTML += score

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
function createDivSquare() {
  let currentElement = document.createElement("div");
  currentElement.classList.add("square");
  return currentElement;
}

// game over function
function gameOver() {
  gameOn = false;
  return gameOn;
}

// new game function
function newGame() {
  gameOn = true;
  score = 0;
  grid.innerHTML = "";
  bombsGenerator(100); //function called
  let square;
  for (let k = 0; k < 100; k++) {
    square = createDivSquare();
    square.addEventListener("click", function () {
      // if gameOn is true
      if (gameOn) {
        // if it's a bomb
        if (bombsArr.includes(k + 1)) {
          this.classList.add("clicked-red");
          gameOver();
          console.log("Hai pestato una bomba");
        } else {
          this.classList.add("clicked-azure");
          console.log("Hai clickato su " + (k + 1));
        }
      } else {
        console.log("Il gioco non è attivo. Ricomincia da capo");
      }
    });
    square.innerText = k + 1;
    grid.append(square);
  }
}
