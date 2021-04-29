let counter;
let screen;
let buttonAdd;
let buttonSubtract;
let buttonContinue;
let square;
let squareList = [];
class Logic{

    constructor (){
        counter = 0;
        screen = 1;
        this.square = new Square;
        
        this.squareList = squareList[counter];
        this.createButtons();

    }

    draw (){
        switch (screen) {
            case 1:

                noStroke();
                fill (250);
                rect (230, 250, 100, 30);
                textAlign(CENTER, CENTER);
                textSize(14);
                text("Ingrese un valor de 1 y 10", 230, 200);
                textSize(12);
                fill (68, 52, 79);
                text(counter, 230, 250);
                break;
            case 2:
                console.log("counter es "+counter);
                buttonAdd.hide();
                buttonSubtract.hide();
                buttonContinue.hide();
    
                break;
        
            default:
                break;
        }
        this.createSquare();
    }

    createSquare(){
        for (let i = 0; i < squareList.length; i++) {
            
            squareList[i].square.drawSquare(60*i,100,50,50);
            squareList[i].square.move();
        }
    }

    createButtons(){
        buttonAdd = createButton('+');
        buttonAdd.position(320, 245);
        buttonAdd.mousePressed(sumCounter)

        buttonSubtract = createButton('-');
        buttonSubtract.position(135, 245);
        buttonSubtract.mousePressed(subtractCounter)

        buttonContinue = createButton('Continuar');
        buttonContinue.position(200, 320);
        buttonContinue.mousePressed(nextScreen)
    }
}

function sumCounter(){
    counter++;
}

function subtractCounter(){
    counter--;

}

function nextScreen(){

    if (counter >= 1 && counter <= 10){
        screen = 2;
    }else{
        alert("El número ingresado debe estar entre 1 y 10", 230, 400);
        counter = 0;
    }
    

}
