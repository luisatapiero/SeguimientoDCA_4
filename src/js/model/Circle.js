class Circle extends Figure{
    constructor (posX, posY, size){
        super(posX, posY, size);
        this.value = (int (random(1,10)));
    }

    draw(){
        noStroke();
        fill(253, 247, 250);
        ellipse(this.posX,this.posY,this.size,this.size);
    }
}