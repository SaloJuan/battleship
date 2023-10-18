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

                newBoard[vertical][horizontal+1];
                //if the ship length > 1 && it cannot be placed any further because an edge of the board has been reached, BREAK and keep trying with other directions? 
                


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