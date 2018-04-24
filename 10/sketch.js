var datos;
var imagenEva;
var imagenMurica;
var imagenFlat;

function preload(){
  datos = loadJSON("https://data.nasa.gov/resource/eva.json");
  
  imagenEva = loadImage ('assets/parche.png');
  imagenMurica= loadImage ('assets/murica.jpg');
  imagenFlat = loadImage ('assets/flatearth.png');
}



function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0,0,0);
  image(imagenFlat,0,0,windowWidth, windowHeight);
  
  
  var cuantos = datos[30].eva;
  
  for (var i = 0; i < cuantos; i = i + 1){
    var _x = random(0, width);
    var _y = random(0, height);
    image(imagenEva, _x, _y, 65, 100);
    print(cuantos);
    
    fill(255,255,255);
    var nombre = datos[i].crew;
    print(nombre);
    text(nombre, _x, _y);
    
    fill(255,20,255);
    var vehiculo = datos[i].vehicle;
    print(vehiculo);
    text(vehiculo, _x+10, _y-29);
    
    var pais = datos[i].country
    if( datos[i].country == "USA"){
      image(imagenMurica, _x+20,_y-28,20,20);
    }
      
  }

}

function draw() {
  
  
}