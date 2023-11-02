

function userShipPlacing(ship, cells){

    console.log(ship);

    cells.forEach(cell =>{

        cell.addEventListener('click', (ev) =>{

            console.log('desde usershiplacing');
        })
    
    
    })
    
    
    
}

module.exports = userShipPlacing;