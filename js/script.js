// elements recovery
const grid = document.getElementById("grid")
const btn = document.getElementById("play")

// number of bombs and bombs generator function
const BOMBS = 16
function bombsGenerator(cells) {
    let bombsArr = []
    while(bombsArr.length < BOMBS) {
        let random = Math.floor(Math.random() * cells) + 1;
        if(!bombsArr.includes(random)){
            bombsArr.push(random)
        }
    }

}

// click event on btn
btn.addEventListener("click", newGame)

// Function
function createDivSquare() {
    let currentElement = document.createElement("div")
    currentElement.classList.add("square")
    return currentElement;
}

function newGame() {
    grid.innerHTML = ""
    let square;
    for (let k = 0; k < 100; k++) {
        square = createDivSquare();
        square.addEventListener("click", function() {
            this.classList.add("clicked-azure")
            console.log("Hai clickato su " + (k + 1))
        })
        square.innerText = k + 1
        grid.append(square)
    }
}