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

// elements recovery
const grid = document.getElementById("grid")
const btn = document.getElementById("play")

// click event on btn
btn.addEventListener("click", newGame)
