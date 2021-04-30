class Circle extends Figure{
    constructor (posX, posY, size){
        super(posX, posY, size);
        this.value = (int (random(1,10)));
    }

    draw(){
        noStroke();
        fill(253, 247, 250);
        ellipse(this.posX,this.posY,this.size,this.size);
        text (this.value, this.posX, this.posY);
    
    }

    moveCircle(){
        this.posX +=  2;
        if(this.posX  < 0 || this.posX - (this.size/2)-5  > 1000){
            this.posX = -2;
        }
    }

    duplicateSize(){
    if (this.size == 25){
        this.size *= 2;
    }
    
}
    
}