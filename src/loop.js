//import './front-end/board.css';
const Board = require('./Gameboard.js');
const userShipPlacing = require('./userShipPlacing');
const renderBoard = require('./renderBoard.js')

const cells = document.querySelectorAll('.cell');
const editModeBtn = document.querySelector('.place-ships');

let gameBoard = new Board()

let editModeEnabled = false;

//event listeners for DOM manipulation-------------------------

if(editModeEnabled == false){

    console.log('calling renderBoard');

    renderBoard(gameBoard);

}


cells.forEach((cell) =>{

    cell.addEventListener("click",(ev) =>{

        

        if(editModeBtn == true){

            //ships may be placed here

            //HERE userShipPlacing should be called 


            
        } else if(editModeBtn == false){

        }



        

    })

})

editModeBtn.addEventListener('click', (ev) =>{

    if(editModeEnabled == false){        
        
        editModeEnabled = true;

        console.log('edit mode enabled ' + editModeEnabled);

        alert('edit mode enabled, place your ships');

    } else if ( editModeEnabled == true){

        editModeEnabled = false;

        console.log('edit mode disabled ' + editModeEnabled);

    }  
    


})




