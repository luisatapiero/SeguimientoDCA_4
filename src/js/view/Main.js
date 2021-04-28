let controllerMain;
let screen;
let firstScreen;

function setup(){
    
    createCanvas(500,500);
    controllerMain = new ControllerMain();
    screen = 1;
    firstScreen = new FirstScreen();

    
}

function draw(){
    rectMode(CENTER);
    background(80, 81, 79);

switch (screen) {
    
    case 1:
        noStroke();
        fill (255);
        rect (230, 250, 100, 30);
        textAlign(CENTER, CENTER);
        textSize(14);
        text("Ingrese un valor de 1 a 10", 230, 200);
        textSize(12);
        fill (0);
        text(counter, 230, 250);
        //controllerMain.draw();

        

        break;
    case 2:

        background(0);
        buttonAdd.hide();
        buttonSubtract.hide();
        buttonContinue.hide();
        
         break;

    default:
        break;
}

}
