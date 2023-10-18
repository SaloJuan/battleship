const Ship = require('../src/Ship.js');


class Gameboard{

    board = 
    [
        //left to right      and top to bottom
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1]
    ] 

    constructor(ships){

        this.placeShip(ships)

        return this.board;             

    }

    placeShip(shipsToPlace){

        
        shipsToPlace.forEach(ship =>{

            if (ship.length == 2){

                this.board[0][1] = 5;
                this.board[0][2] = 5;
            }
        })


    }

    
}







module.exports = Gameboard;
