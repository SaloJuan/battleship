//import './front-end/board.css';
const Board = require('./Gameboard.js');
const userShipPlacing = require('./userShipPlacing.js');
const renderBoard = require('./renderBoard.js');
const Gameboard = require('./Gameboard.js');
const shipsLeft = require('./shipsLeft.js');

const cells = document.querySelectorAll('.cell');
const editModeBtn = document.querySelector('.place-ships');
const utilBtn = document.querySelector('.utility-btn');

let gameBoard = new Board();

let editModeEnabled = false;

if(editModeEnabled == false){    

    renderBoard(gameBoard);

}

let leftShipsToPlace = 2;


cells.forEach((cell) =>{

    cell.addEventListener("click",(ev) =>{             

        if(editModeEnabled == true){

            //depending on leftshipstoPlace's value, build a switch-case to evaluate which ship to assign coordinates on

            gameBoard.ships.forEach( ship => ship.coordinates = ev.currentTarget.id);       
            


            
        } else if(editModeEnabled == false){

            console.log('editMode is not enabled, usershipPlacing() will not be called')

        }        

    })

})

editModeBtn.addEventListener('click', (ev) =>{

    if(editModeEnabled == false){        
        
        editModeEnabled = true;

        console.log('edit mode enabled ' + editModeEnabled);

        console.log('Edit mode enabled, place your ships');

        shipsLeft(gameBoard.ships);

    } else if ( editModeEnabled == true){

        editModeEnabled = false;

        console.log('edit mode disabled ' + editModeEnabled);

    }  
    


})

utilBtn.addEventListener('click', (ev) =>{

    console.log('|-UTILITY-| Ships status: |-UTILITY-|');
    console.log(gameBoard.ships);
    console.log('test1');

})



