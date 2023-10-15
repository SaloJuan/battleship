const Ship = require('../src/Ship.js');


test('is instance of', ()=>{

    let ship1 = new Ship(2);

    
    expect(ship1.length).toBe(2);
    expect(ship1).toBeInstanceOf(Ship);
})