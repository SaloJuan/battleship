const shipsLeftElem = document.querySelector('.left-ships-container');

function shipsLeft(leftShips){

    leftShips.forEach(ship =>{

        let newLeftShipDiv = document.createElement('div');
        newLeftShipDiv.classList.add(`ship-${ship.length}`);

        let newLeftShipPar = document.createElement('p');    
        newLeftShipPar.textContent = `Left ship of ${ship.length} length`;

        let newLeftShipBtn = document.createElement('button');
        newLeftShipBtn.innerText = "Place this Ship"
        newLeftShipBtn.classList.add('left-ship-btn');
        newLeftShipBtn.id = ship.length;
        newLeftShipBtn.addEventListener('click', (ev)=>{

            console.log('placing ship');
            console.log(ship)

            userShipPlacing(newLeftShipBtn.id)

        })

        newLeftShipDiv.appendChild(newLeftShipPar);
        newLeftShipDiv.appendChild(newLeftShipBtn);

        shipsLeftElem.appendChild(newLeftShipDiv);    
        shipsLeftElem.appendChild(document.createElement('br'));
    
        
    })





}


module.exports = shipsLeft;