let counter;
let buttonAdd;
let buttonSubtract;

class FirstScreen{
    constructor(){

        counter = parseInt(0);

        
        buttonAdd = createButton('+');
        buttonAdd.position(320, 245);
        buttonAdd.mousePressed(sumCounter)

        buttonSubtract = createButton('-');
        buttonSubtract.position(130, 245);
        buttonSubtract.mousePressed(subtractCounter)
    }
    
}
   function sumCounter(){
        counter++;
    }

    function subtractCounter(){
        counter--;

    }

