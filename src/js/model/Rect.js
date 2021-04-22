class Rect {
    constructor(posX,posY,tam){
        this.posX = posX;
        this.posY = posY;
        this.tam  = tam;
    }

    draw(){
        noStroke();
        fill(253, 247, 250);
        rect(this.posX,this.posY,this.tam,this.tam);
    }
}

