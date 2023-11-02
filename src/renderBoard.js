const shipsLeft = require('./shipsLeft.js')

const boardContainer = document.querySelector('.board');


function renderBoard(gameBoard){

    console.log('rendering board');
    console.log(gameBoard.board);

    let boardTable = document.createElement('table');

    boardTable.classList.add('board-table');    

    boardContainer.appendChild(boardTable);

    for (let i=0;i<gameBoard.board.length; i++){

        let tableRow = document.createElement('tr');

        tableRow.classList.add('row-' + i);
        //tableRow.classList.add('row')

        boardTable.appendChild(tableRow);

        for (let j=0; j<gameBoard.board[i].length; j++){

            let tableColumn = document.createElement('td');

            tableColumn.classList.add('cell');

            tableColumn.textContent = "1";

            tableRow.appendChild(tableColumn);


        }
    }

    shipsLeft(gameBoard, boardContainer);



}


module.exports = renderBoard;