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
    gameBoard[pacmanPosition] = '.';
    pacmanPosition--;
    if (pacmanPosition < 0) {
        pacmanPosition = gameBoard.length - 1;
    }
    gameBoard[pacmanPosition] = 'C';
    renderBoard();
}

function moveRight() {
    gameBoard[pacmanPosition] = '.';
    pacmanPosition++;
    if (pacmanPosition >= gameBoard.length) {
        pacmanPosition = 0;
    }
    gameBoard[pacmanPosition] = 'C';
    renderBoard();
}

