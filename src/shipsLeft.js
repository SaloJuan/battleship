

function shipsLeft(gameBoard){

    leftShips.forEach(ship =>{

        let newLeftShipElem = document.createElement('div');
        
        newLeftShipElem.classList.add(`ship-${ship.length}`);
    
        newLeftShipElem.innerHTML += `Left ship of ${ship.length} length`;
    
        shipsLeft.appendChild(newLeftShipElem);
    
        shipsLeft.appendChild(document.createElement('br'));
    
        //left
    })





}


module.exports = shipsLeft;