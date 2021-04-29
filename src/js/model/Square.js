let speed;
class Square extends Figure{
    constructor(posX,posY,size, value){
       super(posX, posY, size, value)
       speed = 10;
       this.value = (int(random(1,10)));
    }

    drawSquare(){
        //console.log("funciona el drawSquare");
        noStroke();
        fill(253, 247, 250);
        rect (this.posX, this.posY, this.size, this.size);
        //noLoop();
        fill(68, 52, 79);
        text (this.value, this.posX, this.posY);
        
    }

    moveSquare(){
            //loop();
            //isLoopin();
            console.log(this.posX);
            //this.posX = this.posX + speed;
            this.posX = frameCount % width;
            if(this.posX < 0 || this.posX > 500){
                speed = -speed;
            }
        }

        getValue() {
            return this.value;
        }
        
    }


