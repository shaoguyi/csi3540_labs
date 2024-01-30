let gameBoard = [];
let pacmanPosition = 0;

function createGame(n) {
    gameBoard = new Array(n).fill('.');
    pacmanPosition = Math.floor(n / 2);
    gameBoard[pacmanPosition] = 'C';

    placeItem('^');
    placeItem('@');

    renderBoard();
}

function placeItem(item) {
    let pos;
    do {
        pos = Math.floor(Math.random() * gameBoard.length);
    } while (gameBoard[pos] !== '.');
    gameBoard[pos] = item;
}

function renderBoard() {
    const boardElement = document.getElementById('gameBoard');
    boardElement.innerHTML = '';
    gameBoard.forEach(cell => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        boardElement.appendChild(cellElement);
    });
}

function moveLeft() {
    if (pacmanPosition > 0) {
        gameBoard[pacmanPosition] = '.';
        pacmanPosition--;
        gameBoard[pacmanPosition] = 'C';
        renderBoard();
    }
}

function moveRight() {
    if (pacmanPosition < gameBoard.length - 1) {
        gameBoard[pacmanPosition] = '.';
        pacmanPosition++;
        gameBoard[pacmanPosition] = 'C';
        renderBoard();
    }
}