class Logic{
    
    constructor (speedX, speedY){
        this.speedX = speedX;
        this.speedY = speedY;
    }

    move (){

        posX = posX + speedX;
        posY = posY +speedY;


        if (posX + tam == witdth || posX == 0){
            speedX = - speedX;
            
        }
    
        if (posY + tam == witdth || posY == 0){
            speedY = - speedY;
        }
    }


}