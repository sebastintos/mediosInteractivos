var mx = 0.0;

function setup() {
createCanvas(400,400,WEBGL);
angleMode(DEGREES);
}

function draw() {
  background(mx,120,100);
  
push();//nieve
fill(255);
translate(-130,mx-100,0);
sphere(5);
pop();

push();//nieve
fill(255);
translate(-100,mx-200,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(-110,mx-210,0);
sphere(5);
pop();

push();
fill(255);//nieve
translate(-80,mx-270,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(55,mx-290,0);
sphere(5);
pop();

push();
fill(255);//nieve
translate(130,mx-20,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(200,mx-180,0);
sphere(5);
pop();

push();
fill(255);//nieve
translate(155,mx-100,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(124,mx-1,0);
sphere(5);
pop();

push();
fill(255);//nieve
translate(50,mx-80,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(170,mx-60,0);
sphere(5);
pop();

push();
fill(255);//nieve
translate(90,mx-90,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(100,mx-177,0);
sphere(5);
pop();

push();
fill(255);//nieve
translate(-100,mx-177,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(-90,mx-120,0);
sphere(3);
pop();

push();
fill(255);//nieve
translate(-90,mx-120,0);
sphere(3);
pop();

push();//nubes
fill(93,93,107);
translate(mx-150,-140,0);
rotateX(mx);
ellipsoid(30,15);
pop();

push();//nubes
fill(93,93,107);
translate(mx-120,-130,0);
rotateX(mx);
ellipsoid(40,15);
pop();

push();//nubes
fill(93,93,107);
translate(130+mx,-140,0);
rotateX(mx);
ellipsoid(40,15);
pop();

push();//nubes
fill(93,93,107);
translate(160+mx,-150,0);
rotateX(mx);
ellipsoid(30,15);
pop();

push();//sol
fill(mx,mx,24);
translate(-150,-140,0);
rotateX(mx);
sphere(15);
pop();

push();//flotadores colpatria
fill(51,204,51);
translate(50,mx-250,20);
rotateX(105);
torus(50,15);
pop();

push();//flotadores colpatria
fill(255,204,51);
translate(50,mx-270,20);
rotateX(105);
torus(60,15);
pop();

push();//flotadores colpatria
fill(204,51,102);
translate(50,mx-290,20);
rotateX(105);
torus(50,15);
pop();

push();//flotadores edificio izq
fill(102,204,204);
translate( -200,mx-325,-73);
rotateX(109);
torus(20,10);
pop();

push();
fill(102,51,153);
translate(160,mx-400,0);
rotateX(102);
torus(20,10);
pop();

push();//ventana edificio azul
fill(mx,242,242);
translate(-50,-40,70);
box(5,5);
pop();

push();
fill(255);//ventana edificio azul
translate(-50,-30,70);
box(5,5);
pop();

push();
fill(255);//ventana edificio gris con negro
translate(175,-100,15);
box(5,5);
pop();

push();
fill(mx,120,100);//ventana edificio gris con negro
translate(175,-110,15);
box(5,5);
pop();

push();
fill(mx,242,242);//ventana edificio gris con negro
translate(165,-80,15);
box(5,5);
pop();

push();
fill(mx,242,242);//ventana edificio gris con negro
translate(155,-70,15);
box(5,5);
pop();

push();
fill(mx,242,242);//ventana edificio cafe
translate(-110,-20,50);
box(5,5);
pop();

push();
fill(mx,120,100);//ventana edificio cafe
translate(-100,-10,50);
box(5,5);
pop();

push();
fill(mx,242,242);//ventana edificio cafe
translate(-90,0,50);
box(5,5);
pop();

push();
fill(mx,120,100);//ventana edificio derecha
translate(-170,-40,0);
box(5,5);
pop();

push();//ventana edificio derecha
fill(mx,242,242);
translate(-170,-30,0);
box(5,5);
pop();






  

 
push();//edis derecha colpatria
fill(0);
translate(160,-5,0);
box(30,170);
pop();

push();//edis derecha colpatria
fill(38,42,48);
translate(175,-19,5);
box(18,200);
pop();
  
 push();
 fill(13,13,127);
 translate(-50,0,50);// centro edif
 box(35,120);
 pop();
 
 push();
 fill(200,0,0);
 translate(50,-150,-12);
 box(65,20);
 pop();
 
 push();//colpatria
 fill(128,130,133);
 translate(50,20,-10);
 box(70,330);
 pop();
 
 push();//colpatri lineas
 fill(255);
 translate(25,20,50);
 box(10,305);
 pop();
 
 push();//colpatri lineas
 fill(255);
 translate(40,20,50);
 box(6,305);
 pop();
 
 push();//colpatri lineas
 fill(255);
 translate(50,20,50);
 box(6,305);
 pop();
 
 push();//colpatri lineas
 fill(255);
 translate(60,20,50);
 box(6,305);
 pop();
 
  push();//colpatri lineas
 fill(255);
 translate(72,20,50);
 box(6,305);
 pop();
 
 push();
 fill(117,76,41);
 translate(-95,-17,-70);//torre escalera
 box(20,160);
 pop();
 
 push();
 fill(117,76,41);
 translate(-110,-9,-70);//torre escalera
 box(20,140);
 pop();
 
 
 push();
 fill(117,76,41);
 translate(-130,0,-70);//torre escalera
 box(20,120);
 pop();
 
 push();
 fill(117,76,41);
 translate(-150,9,-75);//torre escalera
 box(30,100);
 pop();
 
 
 

 
 push();
 fill(89,74,66);
 translate(-200,0,-70);//edificio izq
 box(20,150);
 pop();
 
 push();//anden oriente
fill(mx,211,212);
translate(0,75,-76);
rotateX(2);
plane(520,100);
pop();

push();//carrera 7ma
fill(65,64,66);
translate(0,125,0);
plane(400,80);
pop();

push();//anden occidente
fill(mx,242,242);
translate(0,160,0);
plane(400,80);
pop();

// Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();
}