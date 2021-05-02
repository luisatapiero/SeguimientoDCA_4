let controllerMain;

function setup(){
    
    createCanvas(1000,500);
    controllerMain = new ControllerMain();
    screen = 1;

    
}

function draw(){
    
    background(68, 52, 79);
    controllerMain.draw();

}

function keyPressed(){
    if (keyCode == 78){
        controllerMain.sortList();
    }
   
}
