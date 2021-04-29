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
        
        //this.squareList = squareList[];
        this.createButtons();

    }

    draw (){
        
        switch (screen) {
            case 1:

                noStroke();
                fill (250);
                rect (410, 235, 140, 30);
                textAlign(CENTER, CENTER);
                textSize(14);
                text("Ingrese un valor de 1 y 10", 480, 200);
                textSize(12);
                fill (68, 52, 79);
                text(counter, 482, 250);
                break;
            case 2:
                rectMode(CENTER);
                buttonAdd.hide();
                buttonSubtract.hide();
                buttonContinue.hide();
                this.createSquare();
                this.paintSquare();
    
                break;
        
            default:
                break;
        }
        
    }

    createSquare(){
        for (let i = 0; i < counter; i++) {
            squareList.push(new Square(100*i+50,150,50));
            
        }
    }

    paintSquare(){
        for (let i = 0; i < counter; i++) {
        squareList[i].drawSquare();
        //squareList[i].moveSquare();
        }
    }

    createButtons(){
        buttonAdd = createButton('+');
        buttonAdd.position(570, 245);
        buttonAdd.mousePressed(sumCounter)

        buttonSubtract = createButton('-');
        buttonSubtract.position(385, 245);
        buttonSubtract.mousePressed(subtractCounter)

        buttonContinue = createButton('Continuar');
        buttonContinue.position(450, 320);
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
