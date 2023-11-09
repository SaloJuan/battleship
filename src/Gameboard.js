const Ship = require('../src/Ship.js');
 


class Gameboard{     

    ships = [];

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


    

    constructor(){

        // so far it makes sense for this to be hardcoded since every game will have all ships instanciated.
        let ship1 = new Ship(3);
        let ship2 = new Ship(2);

        this.ships.push(ship1);
        this.ships.push(ship2);

        return this;             

    }

    placeShip(shipsToPlace){

        //this fn has to repaint the board according to where the ships are placed
        //here should be 4 ifs, each for each ship length

        
        shipsToPlace.forEach(ship =>{

            if (ship.length == 2){

                this.board[0][1] = 5;
                this.board[0][2] = 5;
            }
        })

        


    }

    receiveAttack(x,y,ship){

        if(this.board[x][y] == 5){
            console.log('a ship was hit at ' + x + ' ' + y);
            
            this.board[x][y] = 7;

            //ship.length--
        }

        if(this.board[x][y] == 1){

            console.log('WATER was hit at ' + x + ' ' + y);
            
            this.board[x][y] = 9;

        }    
        


    }

    
}







module.exports = Gameboard;
