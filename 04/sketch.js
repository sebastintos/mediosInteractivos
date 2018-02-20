// Primero definimos la posición y el tamaño de los botones. 
var boton1x = 40;
var boton1y = 40;
var boton1tam = 20;

var boton2x = 70;
var boton2y = 40;
var boton2tam = 20;

var boton3x = 100;
var boton3y = 40;
var boton3tam = 20;

var boton4x = 130;
var boton4y = 40;
var boton4tam = 20;

var boton5x = 160;
var boton5y = 40;
var boton5tam = 20;

var boton6x = 190;
var boton6y = 40;
var boton6tam = 20;

var boton7x = 220;
var boton7y = 40;
var boton7tam = 20;

var boton8x = 250;
var boton8y = 40;
var boton8tam = 20;

var boton9x = 280;
var boton9y = 40;
var boton9tam = 20;

var boton10x = 310;
var boton10y = 40;
var boton10tam = 20;

//colores

var botonc1x = 500;
var botonc1y = 30;
var botonc1tam = 10;

var botonc2x = 511;
var botonc2y = 30;
var botonc2tam = 10;

var botonc3x = 500;
var botonc3y = 41;
var botonc3tam = 10;

var botonc4x = 511;
var botonc4y = 41;
var botonc4tam = 10;

var botonc5x = 500;
var botonc5y = 51;
var botonc5tam = 10;

var botonc6x = 511;
var botonc6y = 51;
var botonc6tam = 10;

var botonc7x = 500;
var botonc7y = 61;
var botonc7tam = 10;

var botonc8x = 511;
var botonc8y = 61;
var botonc8tam = 10;

var botonc9x = 500;
var botonc9y = 71;
var botonc9tam = 10;

var botonc10x = 511;
var botonc10y = 71;
var botonc10tam = 10;





var cambiocol = 1;


// Estas dos variables nos sirven para saber qué color y qué herramienta
// tenemos seleccionada.
var herramienta = 0;
var colorSelect = 0;
var herramienta1 = 0;
var colorSelect1 = 0;
var herramienta2 = 0;
var colorSelect2 = 0;
var herramienta3 = 0;
var colorSelect3 = 0;
var herramienta4 = 0;
var colorSelect4 = 0;


function setup() {
	// Usamos windowWidth y windowHeight para saber cual es el tamaño de
	// la ventana del explorador de la persona que esta visitando nuestra 
	// página y creamos un canvas de este tamaño.
	createCanvas(1000, 1000);
	background(255, 255, 255);

}

function draw() {
	// Pintamos los botones en la pantalla para que el usuario sepa donde
	// debe hace click. Aunque en este ejemplo solo de usan rectángulos,
	// estos botones deberían ser representativos de la función para la
	// que sirven. 
	fill(211,210,241);
  noStroke();
	rect(0, 0, 600, 120);
//herramientas
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
  
  //colores
  fill(cambiocol, cambiocol, 0);
      cambiocol = cambiocol + 1;
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
  



	if (mouseIsPressed) {
		// Definimos el área sensible de los botones y para que sirven.
		// En este caso tenemos dos botones que sirven para cambiar entre
		// dos herramientas.
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
			herramienta1 = 0;
		}
		if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
			mouseY > boton4y && mouseY < boton4y + boton4tam) {
			herramienta1 = 1;
		}
    		if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
			mouseY > boton5y && mouseY < boton5y + boton5tam) {
			herramienta2 = 0;
		}
    		if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
			mouseY > boton6y && mouseY < boton6y + boton6tam) {
			herramienta2 = 1;
		}
    		if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
			mouseY > boton7y && mouseY < boton7y + boton7tam) {
			herramienta3 = 0;
    }
    		if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
			mouseY > boton8y && mouseY < boton8y + boton8tam) {
			herramienta3 = 1;
    }
    		if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
			mouseY > boton9y && mouseY < boton9y + boton9tam) {
			herramienta4 = 0;
    }
    		if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
			mouseY > boton10y && mouseY < boton10y + boton10tam) {
			herramienta4 = 1;
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
			colorSelect1 = 0;
    }
     if (mouseX > botonc4x && mouseX < botonc4x + botonc4tam &&
			mouseY > botonc4y && mouseY < botonc4y + botonc4tam) {
			colorSelect1 = 1;
     }
    if (mouseX > botonc5x && mouseX < botonc5x + botonc5tam &&
			mouseY > botonc5y && mouseY < botonc5y + botonc5tam) {
			colorSelect2 = 0;
     }
    if (mouseX > botonc6x && mouseX < botonc6x + botonc6tam &&
			mouseY > botonc6y && mouseY < botonc6y + botonc6tam) {
			colorSelect2 = 1;
     }
    if (mouseX > botonc7x && mouseX < botonc7x + botonc7tam &&
			mouseY > botonc7y && mouseY < botonc7y + botonc7tam) {
			colorSelect3 = 0;
     }
    if (mouseX > botonc8x && mouseX < botonc8x + botonc8tam &&
			mouseY > botonc8y && mouseY < botonc8y + botonc8tam) {
			colorSelect3 = 1;
     }
    if (mouseX > botonc9x && mouseX < botonc9x + botonc9tam &&
			mouseY > botonc9y && mouseY < botonc9y + botonc9tam) {
			colorSelect4 = 0;
     }
    if (mouseX > botonc10x && mouseX < botonc10x + botonc10tam &&
			mouseY > botonc10y && mouseY < botonc10y + botonc10tam) {
			colorSelect4 = 1;
     }


		// Una vez seleccionado el color, lo usamos para cambiar el
		// color de relleno de la figura que pintamos después.
		if (colorSelect == 0) {
			fill(cambiocol, cambiocol, 0);
      cambiocol = cambiocol + 1;
    }
		if (colorSelect == 1) {
			fill(0, 10, 255);
      
    if (colorSelect1 == 0) {
			fill(0, 50, 255);
    }
    if (colorSelect1 == 1) {
			fill(211, 255, 241);  
      }
    if (colorSelect2 == 0) {
			fill(50, 125, 41);  
      }
    if (colorSelect2 == 1) {
			fill(11, 215, 241);  
      }
    if (colorSelect3 == 0) {
			fill(70, 55, 101);  
      }
    if (colorSelect3 == 1) {
			fill(20, 55, 100);  
      }
    if (colorSelect4 == 0) {
			fill(50, 15, 190);  
      }
    if (colorSelect4 == 1) {
			fill(0, 25, 50);  
      }
		}
		// Y una vez seleccionada la herramienta la usamos para pintar
		// en la pantalla.
		if (herramienta == 0) {
			rect(mouseX - 50, mouseY - 50, 20, 20);
		}
		if (herramienta == 1) {
			ellipse(mouseX - 10, mouseY - 10, 20, 20);
			line(width / 2, height / 2, mouseX, mouseY);
    
    
      if (herramienta1 == 0) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
      }
      
      if (herramienta1 == 1) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
        
      if (herramienta2 == 0) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
      
      if (herramienta2 == 1) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
        
      if (herramienta3 == 0) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
      
      if (herramienta4 == 0) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
      
      if (herramienta4 == 1) {
			rect(mouseX - 10, mouseY - 10, 10, 20);
      }
      }
      }
      }
      }
      }
      
    }
	}
}