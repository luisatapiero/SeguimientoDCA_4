let counter;
let buttonAdd;
let buttonSubtract;
let buttonContinue;

class FirstScreen{
    constructor(){

        counter = 0;

        if (screen = 1){
            console.log("sirveeee")
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

    
}
   function sumCounter(){
        counter++;
    }

    function subtractCounter(){
        counter--;

    }

    function nextScreen(){

        if (counter > 1 && counter < 10){
            screen = 2;
        }else{
            alert("El número ingresado debe estar entre 1 y 10", 230, 400);
        }
        

    }

