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
        screen = 2;

    }

