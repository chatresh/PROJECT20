
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1400,600);

}


function draw(){
background(r,b,g);



r = map(mouseX,0,1400,0,100);
b = map(mouseX,0,1400,255,80);
g = map(mouseX,0,1400,150,200);

r = map(mouseY,0,600,0,100);
b = map(mouseY,0,600,255,80);
g = map(mouseY,0,600,150,200);



ellipse(mouseX,mouseY,64,64);

}