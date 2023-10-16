class Ship{

    length = 0;

    coordinates = [0][0];
    
    hits = 0;

    sunk = false;

    constructor(len, coorA, coorB){

        this.length = len;

    }


    hit(){

        this.hits ++;
    }

    isSunk(){

        if(length == hits)
            sunk = true;

    }

}

module.exports = Ship;