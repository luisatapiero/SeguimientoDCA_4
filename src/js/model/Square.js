let speed;
class Square extends Figure{
    constructor(posX,posY,size, value){
       super(posX, posY, size, value)
       speed = 2;
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
        this.moveSquare();
        
    }

    moveSquare(){

            console.log(this.posX);
            this.posX +=  2;
            if(this.posX  < 0 || this.posX - (this.size/2)-5  > 1000){
                this.posX = -2;
            }
        }

        getValue() {
            return this.value;
        }
        
    }


