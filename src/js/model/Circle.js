class Circle extends Figure{
    constructor (posX, posY, size, value){
        super(posX, posY, size, value);
    }

    draw(){
        noStroke();
        fill(253, 247, 250);
        ellipse(this.posX,this.posY,this.size,this.size);
    }
}