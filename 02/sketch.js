var posX = 0;// primer cuadro negro
var posY = 0;//primer cuadro negro
var posX2 = 330; // segundo cuadro negro
var posY2 = 0; // segundo cuadro negro
var posX3 = 540; //tercer cuadrado negro
var posY3 = 0; // tercer cuadro negro
var posX4 = 990;// cuarto cuadro negro
var posY4 = 0;//cuarto cuadro negro
var posxR = 103; // cuadrados horizontales naranjas
var posyR = 0;
var posxR2 = 218;
var posyR2 = 0; 
var posxR3 = 433;
var posyR3 = 0;
var posxR4 = 644;
var posyR4 = 0; 
var posxR5 = 757;
var posyR5 = 0; 
var posxR6 = 878;
var posyR6 = 0;
var posxR7 = 1094;
var posyR7 = 0;



function setup() { 
  createCanvas(1200, 400);
  background(210, 196, 169);
  
  
  for (var ayy = 0; ayy < 2; ayy = ayy + 1) {
		for (var lmao = 0; lmao < 2 ; lmao = lmao + 1) {
			fill(0,0,0);
			rect(posX, posY, 50, 200);
			posX = posX + 53;
		}
		
		posY = 203;
	 	posX = 0;
    for (var lmao = 0; lmao < 2 ; lmao = lmao + 1) {
		rect(posX2, posY2, 50, 200);
		posX2 = posX2 + 53;
    }
		posY2 = 203;
	 	posX2 = 330;
    for (var lmao = 0; lmao < 2 ; lmao = lmao + 1) {
    rect(posX3, posY3, 50, 200);
		posX3 = posX3 + 53;
    }
		posY3 = 203;
	 	posX3 = 540;
    for (var lmao = 0; lmao < 2 ; lmao = lmao + 1) {
    rect(posX4, posY4, 50, 200);
		posX4 = posX4 + 53;
    }
		posY4 = 203;
	 	posX4 = 990;
  
  } for (var ayy = 0; ayy < 3; ayy = ayy + 1) {
		for (var lmao = 0; lmao < 2 ; lmao = lmao + 1) {
			noStroke();
      fill(195,62,43);
			rect(posxR, posyR, 115, 35);
			posyR = posyR + 74;
		
    noStroke();
      fill(60,43,35);
			rect(posxR2, posyR2, 112, 35);
			posyR2 = posyR2 + 74;
      
      rect(posxR3, posyR3, 108, 35);
			posyR3 = posyR3 + 74;
      
      rect(posxR3, posyR3, 108, 35);
			posyR3 = posyR3 + 74;
      fill(195,62,43)
      rect(posxR4, posyR4, 112,35);
      posyR4 = posyR4 + 74
      fill(60,43,35)
      rect(posxR5, posyR5, 122,35);
      posyR5 = posyR5 + 74
      fill(195,62,43)
      rect(posxR6, posyR6, 112,35);
      posyR6 = posyR6 + 74
      rect(posxR7, posyR7, 112,35);
      posyR7 = posyR7 +74
      
      
      
      
    
    }
    
    
    
  }
  
  
  

  
  
  

  
}
