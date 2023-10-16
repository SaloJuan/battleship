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

    //player 1
    ship1 = null;
    ship2 = null;
    


    constructor(){

        //call a method that maps cells to DOM or displays board with DOM methods.

        //random positioning first
        

        //player 1

        this.ship1 = new Ship(2);        
        
        this.ship2 = new Ship(3);

        this.shipsInitialPosition(this.ship1, this.board);
        

    }


    shipsInitialPosition(ship, newBoard){        
    
        const shipLen = ship.length;
    
            //placing a random number five in the board to repesent the first occupied cell.
        newBoard[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)] = 5;

        let horizontal = null;
        let vertical = null;

        for (let y = 0; y<newBoard.length; y++)
        {
        
            for (let x=0; x< newBoard[y].length; x++)
            {
                if(newBoard[y][x] == 5){
                    horizontal = x;
                    vertical = y;
                }     
                
                
            }   
        
        }   
        
        let direction = 1;
        //choosing a direction in which start placing the ship along.
        
        do{
            direction = Math.floor(Math.random()*10);            
        
        }while(direction != 1 && direction != 2 && direction != 3 && direction != 4) 
    
        switch (direction){
    
            //derecha
            case 1:

                console.log('1');

                console.log("pos vertical> " + vertical + " pos horizontal> " + horizontal );

                


                //que la nave se ubique LENGTH lugares hacia la derecha

                break;
    
            //izquierda
            case 2:

                console.log('2');

                console.log("pos vertical> " + vertical + " pos horizontal> " + horizontal );

                
                //que la nave se ubique LENGTH lugares hacia la izquierda

                break;
            //arriba
            case 3:
                console.log('3');

                console.log("pos vertical> " + vertical + " pos horizontal> " + horizontal );

                

                break;
            //abajo
            case 4:
                console.log('4');

                console.log("pos vertical> " + vertical + " pos horizontal> " + horizontal );

                

                break;

        }    
    }
}





module.exports = Gameboard;
