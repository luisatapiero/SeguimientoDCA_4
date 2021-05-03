let speed;
class Square extends Figure{
    constructor(posX,posY,size, value){
       super(posX, posY, size, value)
       this.value = (int(random(1,10)));
    }

    drawSquare(){

        noStroke();
        fill(253, 247, 250);
        rect (this.posX, this.posY, this.size, this.size);
        fill(68, 52, 79);
        text (this.value, this.posX, this.posY);
        this.moveSquare();
        
    }

    moveSquare(){
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


        getValue() {
            return this.value;
        }

        getSize() {
            return this.size;
        }
        
        setSize(size) {
            this.size = size;
        }

        getPosX(){
            return this.posX;
        }

        setPosX(posX) {
            this.posX = posX;
        }
    }

    
