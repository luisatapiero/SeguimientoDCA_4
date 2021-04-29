class Square extends Figure{
    constructor(posX,posY,size, value){
       super(posX, posY, size, value)
    }

    drawSquare(){
        console.log("funciona draw")
        noStroke();
        fill(253, 247, 250);
        rect(this.posX,this.posY,this.size,this.size);
    }

    move(posX){
        //console.log("funciona")
        if (posX > 0){
            posX += 2;
        }else if(posX<500){
            posX -= 2;
        }
        
    }
}

