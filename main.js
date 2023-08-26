const colorIn = `rgba(128, 241, 214, 0.3)`;
const colorOut = '#5a7aa9';
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector(".reset");
const winConditions = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
];
let options = ["", "", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartButton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if (roundWon){
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`
        running = false;
    }
    else {
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
//box 1
const box1 = document.querySelector('.grid1');
box1.addEventListener('mouseover', () => {
    box1.style.backgroundColor = colorIn;
});
box1.addEventListener('mouseout', () => {
    box1.style.backgroundColor = colorOut;
});
//box 2
const box2 = document.querySelector('.grid2');
box2.addEventListener('mouseover', () => {
    box2.style.backgroundColor = colorIn;
});
box2.addEventListener('mouseout', () => {
    box2.style.backgroundColor = colorOut;
});
//box 3
const box3 = document.querySelector('.grid3');
box3.addEventListener('mouseover', () => {
    box3.style.backgroundColor = colorIn;
});
box3.addEventListener('mouseout', () => {
    box3.style.backgroundColor = colorOut;
});
//box 4
const box4 = document.querySelector('.grid4');
box4.addEventListener('mouseover', () => {
    box4.style.backgroundColor = colorIn;
});
box4.addEventListener('mouseout', () => {
    box4.style.backgroundColor = colorOut;
});
//box 5
const box5 = document.querySelector('.grid5');
box5.addEventListener('mouseover', () => {
    box5.style.backgroundColor = colorIn;
});
box5.addEventListener('mouseout', () => {
    box5.style.backgroundColor = colorOut;
});
//box 6
const box6 = document.querySelector('.grid6');
box6.addEventListener('mouseover', () => {
    box6.style.backgroundColor = colorIn;
});
box6.addEventListener('mouseout', () => {
    box6.style.backgroundColor = colorOut;
});
//box 7
const box7 = document.querySelector('.grid7');
box7.addEventListener('mouseover', () => {
    box7.style.backgroundColor = colorIn;
});
box7.addEventListener('mouseout', () => {
    box7.style.backgroundColor = colorOut;
});
//box 8
const box8 = document.querySelector('.grid8');
box8.addEventListener('mouseover', () => {
    box8.style.backgroundColor = colorIn;
});
box8.addEventListener('mouseout', () => {
    box8.style.backgroundColor = colorOut;
});
//box 9
const box9 = document.querySelector('.grid9');
box9.addEventListener('mouseover', () => {
    box9.style.backgroundColor = colorIn;
});
box9.addEventListener('mouseout', () => {
    box9.style.backgroundColor = colorOut;
});
