class Ship{

    length = 0;
    
    hits = 0;

    sunk = false;

    constructor(len){

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