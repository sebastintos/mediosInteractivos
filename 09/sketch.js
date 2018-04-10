//Variables Imagenes

var piscinaImagen
var piscinerosImagen
var hojasImagen
var limpiadorImagen
var chichiImagen

//Variables especies

var losninos;
var hojas;
var limpiador;
var orines;

//Variables numeros de especies

var misHojas = [] ;
var masNinos = [] ;
var masOrines = [] ;



function preload(){
  piscinaImagen = loadImage('assets/piscis.jpg');
  piscinerosImagen = loadImage('assets/piscineros.png');
  hojasImagen = loadImage ('assets/hojas.png');
  limpiadorImagen = loadImage('assets/red.png');
  chichiImagen = loadImage ('assets/orines.png');
}



function setup() {
  createCanvas(800, 400);
  
  //definicion de especies 
  
  losninos = new Kids();
  hojas = new Leaf();
  limpiador = new Web();
  orines = new Wee();
  
   for (var i = 0; i < 20; i = i+1) {
    misHojas[i] = new Leaf();
  }
  
  for (var i = 0; i < 5; i = i+1) {
    masNinos[i] = new Kids();
  }
  
  for (var i = 0; i < 5; i = i+1) {
    masOrines[i] = new Wee();
  }
  
  
  
}

function draw() {
  background(255,255,255);
  image(piscinaImagen,0,10,800,400);
  
  // ecuaciones para crear mas numeros de especies
   for (var i = 0; i < misHojas.length; i = i+1) {
    misHojas[i].dibujarse();
    misHojas[i].caer();
  }
  
  for (var i = 0; i < masNinos.length; i = i+1) {
    masNinos[i].dibujarse();
    masNinos[i].moverse();
  }
  
  for (var i = 0; i < masOrines.length; i = i+1) {
    masOrines[i].dibujarse();
    masOrines[i].grow();
    
  }
  
  
   
  
  //atributos para las especies
  
 
  

  
  
  //caracteristicas o acciones de especies
  losninos.dibujarse();
  losninos.moverse();
  
  
  hojas.dibujarse();
  hojas.caer();
  
  
  
  limpiador.dibujarse();
  limpiador.moverse();
  
  orines.dibujarse();
  //orines.moverse();
  orines.grow();
  

 

}

function mouseReleased() {
  var borro = false;

  for (var i = 0; i < misHojas.length; i = i+1) {
    if (mouseX > misHojas[i].x
      && mouseX < misHojas[i].x + 50
      && mouseY > misHojas[i].y
      && mouseY < misHojas[i].y + 50) {

     
      misHojas.splice(i, 1);
      borro = true;
    }
  }
  
    for (var i = 0; i < masOrines.length; i = i+1) {
    if (mouseX > masOrines[i].x
      && mouseX < masOrines[i].x + 20
      && mouseY > masOrines[i].y
      && mouseY < masOrines[i].y + 20) {

     
      masOrines.splice(i, 1);
      borro = true;
    }
  }
  
  
  
  
  
  
  
  }
  

function Kids(){
  this.x = random(75,width-75);
  this.y = random(75, height-75);
  this.tamano = 150;
  this.vivo = 1;
  this.dirX = 1;
  this.dirY = 1;
  
  this.dibujarse = function (){
    if (this.vivo == 1){
      image(piscinerosImagen, this.x, this.y, this.tamano, this.tamano);
    }
  }
  

  this.moverse = function(){
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
    if (this.x <= 75 || this.x >= width-75) {
      this.dirX = this.dirX*-1
    }
    if (this.y <= 75 || this.y >= height-75) {
      this.dirY = this.dirY*-1
    }
  }
}
  



function Leaf() {
  this.x = random (0,width-50);
  this.y = random (height, -height);
  this.tamano = 50;
  this.vivo = true;
  
  this. dibujarse = function (){
    if(this.vivo == true){
      image(hojasImagen, this.x,this.y, 50, 50);
    }
  }
  
this.caer = function() {
    this.y = this.y + 6;

    if (this.y > height) {
      this.x = random(0, width-50);
      this.y = random(-50, -height);
    }
  }
}
 
 

function Web(){
  this.x = mouseX
  this.y = mouseY
  this.tamano = 80;
  this.vivo = 1;
  
  this.dibujarse = function(){
    if(this.vivo == 1) {
      image(limpiadorImagen, mouseX-40, mouseY-40, this.tamano, this.tamano);
    }
  }
  
  this. moverse = function(){
    this.x= this.x + random(-1,1);
    this.y= this.y + random(-1,1);
  }
}

function Wee(){
  this.x = random (86, 500);
  this.y = random(120, 300);
  this.tamano = 20;
  this.vivo = 1;
  
  this.dibujarse = function(){
   if(this.vivo == 1){
     image(chichiImagen, this.x, this.y, this.tamano, this.tamano);
  }
}
  
  this.moverse = function(){
    this.x = this.x + random(1,-1);
    this.y = this.y + random (1,-1);
  }

   
   this.grow = function (){
     this.tamano = this.tamano + 0.1
   }

  this.morirse = function(){
    this.x = this.x + random(0,width);
    this.y = this.y + random ( 0, height);
  }
}
  




  