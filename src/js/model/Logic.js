let counter;
let screen;
let buttonAdd;
let buttonSubtract;
let buttonContinue;
let buttonNewElements;
let buttonDeleteElements;
let buttonCreateCircles;
let buttonDuplicateSize;
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
                buttonNewElements.hide();
                buttonDeleteElements.hide();
                buttonDuplicateSize.hide();
                buttonCreateCircles.hide();
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
                buttonNewElements.show();
                buttonDeleteElements.show();
                buttonDuplicateSize.show();
                buttonCreateCircles.show();
                this.createSquare();
                this.paintSquare();
    
                break;
        
            default:
                break;
        }
        
    }

    createSquare(){
        for (let i = 0; i < counter; i++) {
            squareList.push(new Square(100*i+50,150,40));
            
        }
    }

    paintSquare(){
        for (let i = 0; i < counter; i++) {
        squareList[i].drawSquare();
        }
    }

    createButtons(){

        //Buttons first screen

        buttonAdd = createButton('+');
        buttonAdd.position(570, 245);
        buttonAdd.mousePressed(sumCounter)

        buttonSubtract = createButton('-');
        buttonSubtract.position(385, 245);
        buttonSubtract.mousePressed(subtractCounter)

        buttonContinue = createButton('Continuar');
        buttonContinue.position(450, 320);
        buttonContinue.mousePressed(nextScreen)

        //Buttons second screen

        buttonNewElements = createButton('Agregar elementos');
        buttonNewElements.position(200, 400);
        buttonNewElements.mousePressed(newElements)

        buttonDeleteElements = createButton('Eliminar elementos');
        buttonDeleteElements.position(400, 400);
        buttonDeleteElements.mousePressed(deleteElements)

        buttonDuplicateSize = createButton('Doblar tamaño');
        buttonDuplicateSize.position(600, 400);
        buttonDuplicateSize.mousePressed(duplicateSize)

        buttonCreateCircles = createButton('Crear círculos');
        buttonCreateCircles.position(800, 400);
        buttonCreateCircles.mousePressed(createCircles)

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

function newElements(){
    console.log("New elements");

    if (squareList.length < 10){
        squareList.push(new Square(0,150,40));
        this.paintSquare();
    }
}

function deleteElements(){
    console.log("Delete elements");
    squareList.pop();
}

function duplicateSize(){
    console.log("Duplicate Size");
    squareList.forEach(function(element){
        element.duplicateSize();
    })
}

function createCircles(){
    console.log("Create Circles");
}
