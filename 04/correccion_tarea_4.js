//  la posición y el tamaño de los botones. 
var boton1x = 40;//boton1
var boton1y = 40;
var boton1tam = 20;

var boton2x = 70;//boton2
var boton2y = 40;
var boton2tam = 20;

var boton3x = 100;//boton3
var boton3y = 40;
var boton3tam = 20;

var boton4x = 130;//boton4
var boton4y = 40;
var boton4tam = 20;

var boton5x = 160;//boton5
var boton5y = 40;
var boton5tam = 20;

var boton6x = 190;//boton6
var boton6y = 40;
var boton6tam = 20;

var boton7x = 220;//boton7
var boton7y = 40;
var boton7tam = 20;

var boton8x = 250;//boton8
var boton8y = 40;
var boton8tam = 20;

var boton9x = 280;//boton9
var boton9y = 40;
var boton9tam = 20;

var boton10x = 310;//boton10
var boton10y = 40;
var boton10tam = 20;

var boton11x = 340;//boton borrar
var boton11y = 40;
var boton11tam = 20;

//colores tamaño y posicion

var botonc1x = 500;//botoncolor1
var botonc1y = 30;
var botonc1tam = 10;

var botonc2x = 511;//botoncolor2
var botonc2y = 30;
var botonc2tam = 10;

var botonc3x = 500;//botoncolor3
var botonc3y = 41;
var botonc3tam = 10;

var botonc4x = 511;//botoncolor4
var botonc4y = 41;
var botonc4tam = 10;

var botonc5x = 500;//botoncolor5
var botonc5y = 51;
var botonc5tam = 10;

var botonc6x = 511;//botoncolor6
var botonc6y = 51;
var botonc6tam = 10;

var botonc7x = 500;//botoncolor7
var botonc7y = 61;
var botonc7tam = 10;

var botonc8x = 511;//botoncolor8
var botonc8y = 61;
var botonc8tam = 10;

var botonc9x = 500;//botoncolor9
var botonc9y = 71;
var botonc9tam = 10;

var botonc10x = 511;//botoncolor10
var botonc10y = 71;
var botonc10tam = 10;


// variables para seleccionar el color y la herramienta de dibujo
var herramienta = 0;
var colorSelect = 0;

function setup() {
  // canvas para herramienta de dibujo 
  createCanvas(600, 600);
  background(0);
  


}

function draw() {
  
  
  // barra superior para colocar los botones 
  push();
  fill(211,210,241);
  noStroke();
  rect(0, 0, 600, 120);
  pop();
  

 
  
//botones para herramientas de dibujo
  push();
  noStroke();
  fill(0, 0, 0);
  rect(boton1x, boton1y, boton1tam, boton1tam);
  fill(255, 255, 255);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  fill(200, 100, 0);
  rect(boton3x, boton3y, boton3tam, boton3tam);
  fill(0, 100, 255);
  rect(boton4x, boton4y, boton4tam, boton4tam);
  fill( 0, 20, 100);
  rect(boton5x, boton5y, boton5tam, boton5tam);
  fill( 40, 200, 220);
  rect(boton6x, boton6y, boton6tam, boton6tam);
  fill( 100, 0, 20);
  rect(boton7x, boton7y, boton7tam, boton7tam);
  fill( 140, 0, 70);
  rect(boton8x, boton8y, boton8tam, boton8tam);
  fill( 0, 70, 20);
  rect(boton9x, boton9y, boton9tam, boton9tam);
  fill( 40, 200, 20);
  rect(boton10x, boton10y, boton10tam, boton10tam);
  fill( 104, 101, 104);
  rect(boton11x, boton11y, boton11tam, boton11tam);
  
  pop();
  
  //dibujos de botones para seleccionar color
  push();
  noStroke();
  fill(185,0,196);
  rect(botonc1x, botonc1y, botonc1tam, botonc1tam);
  fill(0, 10, 255);
  rect(botonc2x, botonc2y, botonc2tam, botonc2tam);
  fill(0, 50, 255);
  rect(botonc3x, botonc3y, botonc3tam, botonc3tam);
  fill(211, 255, 241);
  rect(botonc4x, botonc4y, botonc4tam, botonc4tam);
  fill(50, 125, 41);
  rect(botonc5x, botonc5y, botonc5tam, botonc5tam);
  fill(11, 215, 241);
  rect(botonc6x, botonc6y, botonc6tam, botonc6tam);
  fill(70, 55, 101);
  rect(botonc7x, botonc7y, botonc7tam, botonc7tam);
  fill(20, 55, 100);
  rect(botonc8x, botonc8y, botonc8tam, botonc8tam);
  fill(50, 15, 190);
  rect(botonc9x, botonc9y, botonc9tam, botonc9tam);
  fill(0, 25, 50); 
  rect(botonc10x, botonc10y, botonc10tam, botonc10tam);
  pop();
  
    //dibujos para los botones y que el usuario entienda de que se trata el boton
  push();
  noFill();
  stroke(255)
  rect(45,45,10,10);//decoracion boton herramienta 1
  pop();
  
  push();//decoracion boton herramienta 2
  noFill();
  stroke(0);
  ellipse(77,47,10,10);
  ellipse(84,55,5,5);
  pop();
  
  push();//decoracion boton herramienta 3
  noFill();
  stroke(0);
  line(105,45,115,55);
  pop();
  
  push();
  noFill();
  stroke(0);//decoracion boton herramienta 4
  rect(137,45,5,12);
  fill(0);
  ellipse(140,45,7,7);
  pop();
  
  push();
  fill(0);//decoracion boton herramienta 5
  arc(165,47,20,20,0,QUARTER_PI);
  pop();
  
  push();
  noFill();
  stroke(0);//decoracion boton herramienta 6
  arc(200,43,10,10,0,PI);
  arc(200,49,10,10,0,PI);
  pop();
  
  push();
  noFill();
  stroke(0);//decoracion boton herramienta 7
  ellipse(227,47,5,5);
  ellipse(235,47,5,5);
  ellipse(227,55,5,5);
  ellipse(235,55,5,5);
  pop();
  
  push();
  noFill();//decoracion boton herramienta 8
  stroke(0);
  rect(257,42,5,15);
  rect(252,47,15,5);
  pop();
  
  push();
  noFill();// decoracion boton herramienta 9 
  stroke(0);
  ellipse(290,50,10,10);
  ellipse(290,50,5,5);
  pop();
  
  push();
  noFill();
  stroke(0);//decoracion boton herramienta 10
  rect(313,41,5,15);
  rect(313,41,15,5);
  pop();
  
  
  
  
  
  
  
  
  
  
  
  
  
  



  if (mouseIsPressed) {
    // Definir el área sensible de los botones y para que sirven.
    //Primero las herramientas de dibujo
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
    if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      herramienta = 3;
    }
        if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
      mouseY > boton5y && mouseY < boton5y + boton5tam) {
      herramienta = 4;
    }
        if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      herramienta = 5;
    }
        if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      herramienta = 6;
    }
        if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
      mouseY > boton8y && mouseY < boton8y + boton8tam) {
      herramienta = 7;
    }
        if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
      mouseY > boton9y && mouseY < boton9y + boton9tam) {
      herramienta = 8;
    }
        if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
      mouseY > boton10y && mouseY < boton10y + boton10tam) {
      herramienta = 9;
    }
      if (mouseX > boton11x && mouseX < boton11x + boton11tam &&
      mouseY > boton11y && mouseY < boton11y + boton11tam) {
      herramienta = 10;
    }
    //colores
    if (mouseX > botonc1x && mouseX < botonc1x + botonc1tam &&
      mouseY > botonc1y && mouseY < botonc1y + botonc1tam) {
      colorSelect = 0;
    }
    
    if (mouseX > botonc2x && mouseX < botonc2x + botonc2tam &&
      mouseY > botonc2y && mouseY < botonc2y + botonc2tam) {
      colorSelect = 1;
    }
    
     if (mouseX > botonc3x && mouseX < botonc3x + botonc3tam &&
      mouseY > botonc3y && mouseY < botonc3y + botonc3tam) {
      colorSelect = 2;
    }
     if (mouseX > botonc4x && mouseX < botonc4x + botonc4tam &&
      mouseY > botonc4y && mouseY < botonc4y + botonc4tam) {
      colorSelect = 3;
     }
    if (mouseX > botonc5x && mouseX < botonc5x + botonc5tam &&
      mouseY > botonc5y && mouseY < botonc5y + botonc5tam) {
      colorSelect = 4;
     }
    if (mouseX > botonc6x && mouseX < botonc6x + botonc6tam &&
      mouseY > botonc6y && mouseY < botonc6y + botonc6tam) {
      colorSelect = 5;
     }
    if (mouseX > botonc7x && mouseX < botonc7x + botonc7tam &&
      mouseY > botonc7y && mouseY < botonc7y + botonc7tam) {
      colorSelect = 6;
     }
    if (mouseX > botonc8x && mouseX < botonc8x + botonc8tam &&
      mouseY > botonc8y && mouseY < botonc8y + botonc8tam) {
      colorSelect = 7;
     }
    if (mouseX > botonc9x && mouseX < botonc9x + botonc9tam &&
      mouseY > botonc9y && mouseY < botonc9y + botonc9tam) {
      colorSelect = 8;
     }
    if (mouseX > botonc10x && mouseX < botonc10x + botonc10tam &&
      mouseY > botonc10y && mouseY < botonc10y + botonc10tam) {
      colorSelect = 9;
     }


    
    // color de los botones para escoger y usar con las herramientas de dibujo
    if (colorSelect == 0) {
      fill(185,0,196);
      stroke(185,0,196);
    }
    if (colorSelect == 1) {
      fill(0, 10, 255);
      stroke(0,10,255);
    }
      
    if (colorSelect == 2) {
      fill(0, 50, 255);
      stroke(0,50,255);
    }
    if (colorSelect == 3) {
      fill(211, 255, 241);
      stroke(211,255,241);
      }
    if (colorSelect == 4) {
      fill(50, 125, 41); 
      stroke(50,125,41);
      }
    if (colorSelect == 5) {
      fill(11, 215, 241); 
      stroke(11,215,241);
      }
    if (colorSelect == 6) {
      fill(70, 55, 101);
      stroke(70,55,101);
      }
    if (colorSelect == 7) {
      fill(20, 55, 100);  
      stroke(20,55,100);
      }
    if (colorSelect == 8) {
      fill(50, 15, 190);
      stroke(50,15,190);
      }
    if (colorSelect == 9) {
      fill(0, 25, 50);  
      stroke(0,25,50);
      }
    
    //definir que hace cada herramienta de dibujo cuando se presiona el boton
      if (herramienta == 0) {
      noFill();
      rect(mouseX - 10, mouseY - 10, 20, 20);
      }
      if (herramienta == 1) {
      noFill();
      ellipse(mouseX-10, mouseY -10, 20,20);
      ellipse(mouseX-40, mouseY -40, 30,30);
      }
    
    
      if (herramienta == 2) {
        line(600, 300, mouseX, mouseY);
      }
      
      if (herramienta == 3) {
      push();
      noFill();
      rect(mouseX - 10, mouseY - 10, 10, 50);
      pop();
      ellipse(mouseX-5,mouseY-5,20,20);
      }
        
      if (herramienta == 4) {
      arc(mouseX,mouseY,60,60,1,HALF_PI);
      }
      
      if (herramienta == 5) {
      noFill();
      arc(mouseX,mouseY,40,40,0,PI);
      arc(mouseX,mouseY+30,40,40,0,PI);
      
      }
        
      if (herramienta == 6) {
      noFill();
      ellipse(mouseX,mouseY,20,20);
      ellipse(mouseX+25,mouseY,20,20);
      ellipse(mouseX,mouseY+25,20,20);
      ellipse(mouseX+25,mouseY+25,20,20);
      
      }
      
      if (herramienta == 7) {
      noFill();
      rect(mouseX,mouseY,10,40);
      rect(mouseX-15,mouseY+15,40,10);
      }
      
      if (herramienta == 8) {
      noFill();
      ellipse(mouseX,mouseY,70,70);
      ellipse(mouseX,mouseY,35,35);
      
      }
      if (herramienta == 9) {
      noFill();
      rect(mouseX,mouseY,10,60);
      rect(mouseX,mouseY,60,10);
      
      }
      if(herramienta == 10) {
        background(0,0,0);
      }
    
    }
  
}