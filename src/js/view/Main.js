let controllerMain;
let screen;
let firstScreen;

function setup(){
    
    createCanvas(500,500);
    controllerMain = new ControllerMain();
    firstScreen = new FirstScreen();
    screen = 1;
}

function draw(){
    rectMode(CENTER);
    background(80, 81, 79);

switch (screen) {
    
    case 1:
        noStroke();
        fill (255);
        rect (230, 250, 100, 30);
        fill (0);
        textAlign(CENTER, CENTER);
        text(firstScreen.number, 230, 250);
        controllerMain.draw();

        break;
    case 2:
        
         break;

    default:
        break;
}

}