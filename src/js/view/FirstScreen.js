let number;

let buttonAdd;
let buttonSubtract;

class FirstScreen{
    constructor(){

        this.number = 0;
        buttonAdd = createButton('+');
        buttonAdd.position(130, 245);
        buttonAdd.mousePressed(addButton);

        buttonSubtract = createButton('-');
        buttonSubtract.position(320, 245);
        buttonSubtract.mousePressed(subtractButton);
    }

}
    function addButton(){
        number =+ 1;
        console.log("sirvo");
    }

    function subtractButton(){
        number =- 1;
        console.log("sirvo -");
    }

