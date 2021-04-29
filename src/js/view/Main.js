let controllerMain;

function setup(){
    
    createCanvas(500,500);
    controllerMain = new ControllerMain();
    screen = 1;

    
}

function draw(){
    
    background(68, 52, 79);
    controllerMain.draw(screen);

}
