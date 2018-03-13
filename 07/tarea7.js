var elTobogan;
var elAngel;
var elCuadro;
var elCuadroMascara;
var laMascara;
var elAngelMascara;
var laMascara2;

var boton1x = 450;
var boton1y = 20;
var boton1tam = 20;

var boton2x = 450;
var boton2y = 60;
var boton2tam = 20;

var boton3x = 450;
var boton3y = 100;
var boton3tam = 20;

var boton4x = 450;
var boton4y = 140;
var boton4tam = 20;

var boton5x = 450;
var boton5y = 180;
var boton5tam = 20;

var boton6x = 450;
var boton6y = 220;
var boton6tam = 20;

var boton7x = 450;
var boton7y = 260;
var boton7tam = 20;



var herramienta = 0;
var imageSelect = 0;



function preload(){
elDemo = loadImage('assets/demo.jpg');
elTobogan = loadImage('assets/imagen1.jpg');
elCuadro = loadImage('assets/imagen2.jpg');
elAngel = loadImage('assets/imagen3.jpg');
elCuadroMascara = loadImage('assets/imagen2.jpg');
laMascara = loadImage('assets/oro.png');
elAngelMascara = loadImage('assets/imagen3.jpg');
laMascara2 = loadImage('assets/mira.png');
}

function setup() {
  
  createCanvas(500,500);
  //image(elTobogan,0,0,400,400);//FILTRO1
  elCuadroMascara.mask(laMascara);//FILTRO2
  elAngelMascara.mask(laMascara2);//filtro3

}

function draw() {
  noStroke();
  fill(0,243,255);
  rect(boton1x,boton1y,boton1tam,boton1tam);//boton1
  
  noStroke();
  fill(204,35,52);
  rect(boton2x,boton2y,boton2tam,boton2tam);
  
  noStroke();
  fill(159,204,35);
  rect(boton3x,boton3y,boton3tam,boton3tam);
  
  //imagenes
  fill(0);
  rect(boton4x,boton4y,boton4tam,boton4tam);
  
  fill(0);
  rect(boton5x,boton5y,boton5tam,boton5tam);
  
  fill(0);
  rect(boton6x,boton6y,boton6tam,boton6tam);
  
   fill(153,158,139);
  rect(boton7x,boton7y,boton7tam,boton7tam);
  
  image(elTobogan,boton4x,boton4y,boton4tam,boton4tam);
  image(elCuadro,boton5x,boton5y,boton5tam,boton5tam);
  image(elAngel,boton6x,boton6y,boton6tam,boton6tam);
  
  fill(255);
  rect(455,265,10,10);
  
  
  
  if (mouseIsPressed){
      if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      herramienta = 0;
      }
      
        if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      herramienta = 1;
      }
      
         if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
      herramienta = 2;
      }
        if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      herramienta = 3;
      }
    
      
      if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      imageSelect = 0;
      }
      
        if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
      mouseY > boton5y && mouseY < boton5y + boton5tam) {
      imageSelect = 1;
      }
      
         if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      imageSelect = 2;
      
      }
       push();
      if (herramienta == 3) {
        background(255,255,255);
      }
      pop();
      
      //imagenes
      if(imageSelect == 0){
        image(elTobogan,0,0,400,400);
      }
       if(imageSelect == 1){
        image(elCuadro,0,0,400,400);
      }
       if(imageSelect == 2){
        image(elAngel,0,0,400,400);
      }
      //filtros
      push();
      
      if (herramienta == 0) {
        tint(0,153,204,126);
        image(elDemo,0,0,400,40);
        image(elDemo,0,100,400,40);
        image(elDemo,0,200,400,40);
        image(elDemo,0,280,400,40);
        image(elDemo,0,360,400,40);
      
        
        //tint(106,248,255);
        //rect(200,0,40,400);
       //for (var f = mouseY-5; f <mouseY+5; f=f+70){
       // for(var c = mouseX-5; c <mouseX+5; c=c+70){
     
       //var colSel = get(c,f);
       //var rojo = red(colSel);
       //var verde = green(colSel);
       //var azul = blue(colSel);
       //var nuevoCol= color(azul, rojo, verde);
       //fill(nuevoCol);
       //noStroke();
       //rect(c,f,5,100);
       
       
        // }
      //}
      }
      pop();
      
      push();
      if (herramienta == 1) {
      
      //background(255,255,255);
      //tint(26,96,31);
      //image(elCuadro,0,0,400,400);
      tint(26,96,31);
      
      filter(THRESHOLD,0.3);
      tint(240,96,31);
      image(elCuadroMascara,0,0,400,400);
      }
      pop();
      push();
      if (herramienta == 2) {
        //background(255,255,255);
        //image(elAngel,0,0,400,400);
        filter(INVERT)
        tint(255,253,8);
        image(elAngelMascara,10,10,380,380);
      }
      pop();
      
     
      
     
        
   
 
        
  
  
  
  
  //filtro3
  //background(255,255,255);
  //image(elAngel,0,0,400,400);
  //filter(INVERT)
  //tint(255,253,8);
  //image(elAngelMascara,10,10,380,380);
  
  
  
  //FILTRO2
  //background(255,255,255);
  //tint(26,96,31);
  //image(elCuadro,0,0,400,400);
  
  //filter(BLUR);
  //tint(240,80,90);
  //image(elCuadroMascara,0,0,400,400);
  
  
  
  
  
  //filtro1
 //for (var f = mouseY-5; f <mouseY+5; f=f+70){
 //  for(var c = mouseX-5; c <mouseX+5; c=c+70){
     
 //var colSel = get(c,f);
 
 //var rojo = red(colSel);
 //var verde = green(colSel);
 //var azul = blue(colSel);
 
 //var nuevoCol= color(azul, rojo, verde);
 
 //fill(nuevoCol);
 //noStroke();
 //rect(c,f,5,100);
 

 
 
 //  }
 //} 
   
   
  }
}