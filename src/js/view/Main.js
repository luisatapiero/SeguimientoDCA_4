
let myRect;

function setup(){
    createCanvas(400,400);
    myRect = new MyRect(200,200,50);
}


function draw(){
    background(96,67,95);
    myRect.draw();
}