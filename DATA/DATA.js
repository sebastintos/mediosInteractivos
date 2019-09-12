var boton1x = 40;
var boton1y = 100;
var boton1tam = 20;

var boton2x = 40;
var boton2y = 200;
var boton2tam = 20;

var boton3x = 40;
var boton3y = 300;
var boton3tam = 20;

var boton4x = 40;
var boton4y = 400;
var boton4tam = 20;

var imagen1;
var imagen2;
var imagen3;
var imagen4;
var imagen5;

var estado = 0;

function preload(){
 imagen1 = loadImage('assets/dat1.jpg'); 
 imagen2 = loadImage('assets/dat2.jpg'); 
 imagen3 = loadImage('assets/dat3.jpg'); 
 imagen5 = loadImage('assets/titulo.png'); 
}

function setup() {
  createCanvas (windowWidth,windowHeight);
   background(0);
  
  
  

}

function draw() {
  fill(255,255,0);
  textSize(12);
  textFont('Courier');
    text("resúmen", 25,90);
    text("cumpleaños",20,190);
    text("año nuevo",20,290);
    text("resetear",25,390);
  
  
  
  
  
  
 
  push();
  noStroke();
  fill(0, 120, 0);
  rect(boton1x, boton1y, boton1tam, boton1tam);
  
    fill(255, 255, 0);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  
    fill(0, 120, 0);
  rect(boton3x, boton3y, boton3tam, boton3tam);
  
   fill(255, 255, 0);
  rect(boton4x, boton4y, boton4tam, boton4tam);
  pop();
  //push();
  //fill(0, 120, 0);
  //translate(boton1x, boton1y,0);
  //plane(boton1tam, boton1tam);
  //pop();

  image(imagen5, width/18,height/1.1);
  
  
   if (mouseIsPressed) {
   if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      estado = 0;
      }
       if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      estado = 1;
      }
       if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
      estado = 2;
      }
      
         if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      estado = 3;
      }
   
      
      if (estado == 0) {
        image(imagen1,0,0,1400,600);
      }
      
       if (estado == 1) {
        image(imagen2,0,0,1400,600);
      }
      
       if (estado == 2) {
        image(imagen3,0,0,1400,600);
      }
      
            if(estado == 3) {
        background(0,0,0);
      }
      
   }
  
}