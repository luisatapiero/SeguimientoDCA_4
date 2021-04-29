let speed;
class Square extends Figure{
    constructor(posX,posY,size, value){
       super(posX, posY, size, value)
       speed = 2;
    }

    drawSquare(){
        noStroke();
        fill(253, 247, 250);
        rect(this.posX,this.posY,this.size,this.size);
        fill(68, 52, 79);
        text (this.value, this.posX, this.posY);
        this.move();
    }

    move(posX){
            console.log(this.posX);
            posX += speed *2;
            if(this.posX > 0 || this.posX < 500){
                speed -= speed;
            }
        }
        
    }


