let numberOfSquares = 256;

for (let i = 1; i <= 256; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.setAttribute('id', i);
    let squares = document.getElementById(i);
    squares.addEventListener('mouseover', changeColor);
    square.setAttribute('class', 'gridSquare');
    document.getElementById(i).style.height = "62.5px";
    document.getElementById(i).style.width = "62.5px";
    document.getElementById(i).style.border = "1px solid black";
};

function changeColor() {
    this.style.backgroundColor = 'black';
}

document.getElementById("newGridButton").addEventListener('click', newGrid);

function newGrid() {
    let newNumberOfSquares = numberOfSquares;
    for (let i = 1; i <= newNumberOfSquares; i++) {
        let a = document. getElementById(i); 
        a.remove();
    }

    let userInput = prompt("Please provide the number of rows and columns");
    debugger
    let numberOfRows = Number(userInput);
    let numberOfColumns = numberOfRows;
    let veryNewNumberOfSquares = numberOfRows * numberOfColumns;
    let b = document.getElementById("container")
    let columnSize = 1000/numberOfColumns;
    b.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;;
    let rowSize = 1000/numberOfRows;
    b.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;

    for (let i = 1; i <= veryNewNumberOfSquares; i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.setAttribute('id', i);
        let squares = document.getElementById(i);
        squares.addEventListener('mouseover', changeColor);
        square.setAttribute('class', 'gridSquare');
        document.getElementById(i).style.height = `${columnSize}px`; // Relativ zum Container machen
        document.getElementById(i).style.width = `${columnSize}px`; // Relativ zum Container machen
        document.getElementById(i).style.margin = "0px";
        document.getElementById(i).style.padding = "0px";
        document.getElementById(i).style.border = "1px solid black";
        numberOfSquares = veryNewNumberOfSquares;
    }
}

/* 
    
    
Pseudocode
1. size grid elements in relation to grid

Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

let x = prompt('How many squares should appear?');
let numberOfSquares = parseInt(x, 10);

document.getElementById("newGridButton").addEventListener("click", 

function newGrid(prompt"Number of rows and columns for the new grid:")) {
    let numberOfRows = prompt("Number of rows and columns for the new grid:");
    let numberOfColumns = prompt;
    let numberOfSquares = prompt * prompt;
});

 if (i == 256) {
        document.getElementById('container').style.height = Math.sqrt(256) * 25;
        document.getElementById('container').style.length = Math.sqrt(256) * 25;
    }



    for (let i = 1; i <= numberOfSquares; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.setAttribute('id', i);
    let test = document.getElementById(i);
    test.addEventListener('mouseover', changeColor);
    square.setAttribute('class', 'gridSquare');
    document.getElementById(i).style.height = "50px";
    document.getElementById(i).style.width = "50px";
    document.getElementById(i).style.height = "50px";
};
*/