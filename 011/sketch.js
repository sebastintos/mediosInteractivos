//variables de estados juego
var estado = 0;

var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3;
var colorFondo = 0;
//variables especies
var laMira;
var laPeuno;
var laPedos;
var laPetres;
//numero de especies
var masVenus = [] ;
var masMarte = [] ;
var masNova = [] ;


var puntaje = 0;

//variable imagenes utilizadas
var imagenIntro;
var imagenMira;
var imagenDeco;
var songIntro;
var imagenP1;
var imagenP2;
var imagebP3;

function preload(){
  imagenIntro=loadImage('assets/imagen1.png');//imagen intro
  imagenMira=loadImage('assets/mira2.png');//imagen mira
  imagenDeco=loadImage('assets/decoracionmira.png');//user interface imagen
  imagenP1=loadImage('assets/planeta1.png');//imagen planeta 1
  imagenP2=loadImage('assets/planeta2.png');//imagen planeta 2
  imagenP3=loadImage('assets/planeta3.png');// imagen planeta 3
  songIntro=loadSound('assets/song1.mp3');//cancion intro
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;
  songIntro.loop();
  
  //definicion "planetas"
  laMira = new Mirador(width/2, height/2);
  laPeuno = new Venus();
  laPedos = new Marte();
  laPetres = new Nova();
  
  //numero de planetas
  
    for (var i = 0; i < 20; i = i+1) {
    masVenus[i] = new Venus();
  }
  
  for (var i = 0; i < 10; i = i+1) {
    masMarte[i] = new Marte();
  }
  
  for (var i = 0; i < 10; i = i+1) {
    masNova[i] = new Nova();
  }
}

// lo que pasa en los estados

function draw() {
  if (estado == INTRO) {
    background(0, 0, 0);
    
    fill(236,238,65);
    text("C L U S T E R", width/2+3,height/7);
    fill(32,211,32);
    textAlign(CENTER);
    textSize(40);
    textStyle(BOLD);
    textFont('Courier')
    text("C L U S T E R", width/2,height/7);
    
    //imagen mira
    image(imagenIntro, width/3.4, height/4,400,400);
      

    
    
  } else if (estado == JUEGO) {
    background(colorFondo);
    push();
    strokeWeight(4);
    stroke(219,150,0);
    //lineas esquina superior izq
    //line(width/15,height/16, width/6,height/16);
    //line(width/15,height/16, width/15,height/4);
    //lineas esquina inferior izq
    //line(width/15,height/2, width/15,height/3);
    //ellipse(100,height/2,10,10);
    pop();
    image(imagenDeco,width/45,height/30,960,540);
    fill(250);
    textAlign(LEFT);
    textSize(20);
    text("Puntaje: " + puntaje, 10, 30);
    //text("Inclinación Y " + rotationY, 10, 30);
    //text("Inclinación X " + rotationX, 10, 50);
    
    
    // ecuaciones para crear mas numeros de especies
   for (var i = 0; i < masVenus.length; i = i+1) {
    masVenus[i].dibujarse();
    masVenus[i].caer();
  }
  
  for (var i = 0; i < masMarte.length; i = i+1) {
    masMarte[i].dibujarse();
    masMarte[i].caer();
  }
  
  for (var i = 0; i < masNova.length; i = i+1) {
    masNova[i].dibujarse();
    masNova[i].caer();
    
  }
    
    // acciones de los planetas y la mira
    
    laMira.dibujarse();
    laMira.moverse();
    
    laPeuno.dibujarse();
    laPeuno.caer();
    
    laPedos.dibujarse();
    laPedos.caer();
    
    laPetres.dibujarse();
    laPetres.caer();
    

    if (puntaje > 25) { 
      estado = OUTRO;
      puntaje = 0;
    }
  } else {
    background(0);
    fill(236,238,65);
    textAlign(CENTER);
    textSize(60);
    text("¡HAZ GANADO!", width/2, height/2);
    fill(32,211,32);
    textSize(60);
    text("¡HAZ GANADO!", width/2+3, height/2);
  }
}


//splice para planetas 
function touchStarted() {
  if (estado == INTRO) {
     estado = JUEGO;
  } else if (estado == JUEGO) {
    
    var borro = false;

  for (var i = 0; i < masVenus.length; i = i+1) { //Mira vs planeta azul rayas rojas
    if (laMira.x > masVenus[i].x
      && laMira.x-80 < masVenus[i].x  
      && laMira.y > masVenus[i].y
      && laMira.y-50 < masVenus[i].y   ) {

     
      masVenus.splice(i, 1);
      borro = true;
    }
    }
    for (var i = 0; i < masMarte.length; i = i+1) {
    if (laMira.x > masMarte[i].x
      && laMira.x-250 < masMarte[i].x  
      && laMira.y > masMarte[i].y
      && laMira.y-250 < masMarte[i].y   ) {

     
      masMarte.splice(i, 1);
      borro = true;
    }
    }
    for (var i = 0; i < masNova.length; i = i+1) {
    if (laMira.x > masNova[i].x
      && laMira.x-46 < masNova[i].x  
      && laMira.y > masNova[i].y
      && laMira.y -52 < masNova[i].y   ) {

     
      masNova.splice(i, 1);
      borro = true;
    }
    }
    
    if (borro == true) {
      puntaje = puntaje + 1;
    }
    
    
      
    
  } else {
    if (estado == OUTRO) {
      estado = INTRO;
    }
  }
}





function Mirador() {
  this.x = //width/2;
  this.y = //height/2;
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    
    image(imagenMira,this.x,this.y,250,250 );
  }

  this.moverse = function() {

    this.x = rotationX*10+390;
    this.y = rotationY*10+165;
  }
}
  
function Venus(){
  this.x = random (0,width-68);
  this.y = random (height, -height);
  this.tamano1 = 68
  this.tamano2 = 62
  
  this.dibujarse = function(){
    image(imagenP1,this.x,this.y,this.tamano1,this.tamano2);
  }
  this.caer = function() {
    this.y = this.y + 6;

    if (this.y > height) {
      this.x = random(0, width-68);
      this.y = random(-62, -height);
    }
  }
  
  
    
  }
  
  function Marte(){
  this.x = random (0,width-50);
  this.y = random (height, -height);
  
  this.dibujarse = function(){
    image(imagenP2,this.x,this.y,89,85);
  }
  this.caer = function() {
    this.x = this.x + 6;

    if (this.x > width) {
      this.x = random(-89, -width);
      this.y = random(0, height-85);
      
      //this.x = random(0, width-50);
      //this.y = random(-50, -height);
    }
  }
  
  
    
  }
  
function Nova(){
  this.x = random (0,width-50);
  this.y = random (height, -height);
  
  this.dibujarse = function(){
    image(imagenP3,this.x,this.y,46,52);
  }
  this.caer = function() {
    this.y = this.y  +4;
    
  

    if (this.y > height) {
      this.x = random(0, width-46);
      this.y = random(-52, -height);

     
    }
  }
  
  
 
}