const shipsLeft = require('./shipsLeft.js')

const boardContainer = document.querySelector('.board');


function renderBoard(gameBoard){    

    let boardTable = document.createElement('table');

    boardTable.classList.add('board-table');    

    boardContainer.appendChild(boardTable);

}


module.exports = renderBoard;