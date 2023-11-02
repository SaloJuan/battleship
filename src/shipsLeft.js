

function shipsLeft(gameBoard, boardContainer){

    let shipsLeftContainer = document.createElement('div');

    shipsLeftContainer.classList.add('ships-left-container');

        //here I'll have to actually query all ships and print every one of them in the div. So this will have to be refactored as a forEach(). Note how here is gameboard.ship1 hardcoded.
    shipsLeftContainer.innerHTML = 'Ship of length> ' + gameBoard.ship1.length;

    boardContainer.appendChild(shipsLeftContainer);






}


module.exports = shipsLeft;