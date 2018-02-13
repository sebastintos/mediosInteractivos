var vent = 4
var posYcuerpo = 550
var posYaleta = 600
var posYala1 = 950
var posYala2 = 900
var posYala3 = 930
var posYfuego = 960
var dir = -6

function setup() { 

} 

function draw() {

    createCanvas(1000, 1000);
  background(vent,vent,104);
  
  noStroke();
  fill(vent,140,50);
  ellipse(506,posYfuego,30,60);
  fill(vent,153,48);
  ellipse(506,posYfuego,20,50);
  posYfuego = posYfuego -6
  
  
  fill(153,139,135);
  noStroke();
  
  rect(800,400,200,600); // edificio
  fill(79,77,77);
  beginShape();
  vertex(800,400);
  vertex(850,350);
  vertex(1000,350);
  vertex(1000,400);
  endShape(CLOSE);
  
  fill(16,29,145);
  rect(920,500,50,50);
  rect(920,570,50,50);
  rect(920,640,50,50);
  
  noFill();
  strokeWeight(8);
  stroke(189,33,206);
  rect(45,600,100,700);
  
  line(45,600,145,650);//andamios
  line(145,650,45,650);
  line(45,650,145,700);
  line(145,700,45,700);
  line(145,750,45,750);
  line(145,800,45,800);
  line(145,850,45,850);
  line(145,900,45,900);
  
  fill(150,34,106)   //plataformacuadrada
  noStroke();
  beginShape();
  vertex(0, 1000);
  vertex(50,950);
  vertex(950,950);
  vertex(1000,1000);
  endShape(CLOSE);
  
  fill(145,85,75);
  arc(500,950,500,90,0,PI); //plataforma circulo
  
 
  fill(31,81,94);
  ellipse(505,posYcuerpo,50,50);
  

  
  beginShape();
  vertex(400,posYala1);//alas de cohete
  vertex(450,posYala2);
  vertex(480,posYala2);
  vertex(480,posYala3);
  vertex(450,posYala3);
  endShape(CLOSE);
  
  posYala1 = posYala1 -6
  posYala2 = posYala2 -6
  posYala3 = posYala3 -6
  
  beginShape();
  vertex(610,posYala1);//alas de cohete
  vertex(560,posYala2);
  vertex(510,posYala2);
  vertex(510,posYala3);
  vertex(560,posYala3);
  endShape(CLOSE);

  rect(450,posYaleta,60,10);
  rect(500,posYaleta,60,10);
  posYaleta = posYaleta -6
  
  
  fill(38,130,155);   //rectangulo cohete
  rect(480,posYcuerpo,50,400);
  posYcuerpo =posYcuerpo -6
  if(posYcuerpo < 0 || posYcuerpo > 550);{
    dir=dir*-1
  }
  
  stroke(250);
  point(380,250);
  point(280,550);
  point(180,50);
  point(80,310);
  point(780,350);
  point(980,50);
  point(650,150);
  
  
  
  
  noStroke();
  fill(vent,vent,145);
  rect(920,500,50,50);
  rect(920,570,50,50);
  rect(920,640,50,50);
  vent = vent + 1
  
 
  
   
 
  
  
  
  
  
}