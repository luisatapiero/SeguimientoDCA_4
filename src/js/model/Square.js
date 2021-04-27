class Square extends Figure{
    constructor(posX,posY,size, value){
       super(posX, posY, size, value)
    }

    draw(){
        noStroke();
        fill(253, 247, 250);
        rect(200,200,20,20);
    }
}

