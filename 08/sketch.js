var leSound;
var amplitud;
var leImage;
var leImagen;


function preload(){
  leSound = loadSound ('assets/sonido1.mp3');//sonido de metal
  leImage = loadImage ('assets/ayyyy.jpg');// mujer en bikini
  leImagen = loadImage('assets/pinacolada.jpg');//pinas coladas
 
}


function setup() {
  
  createCanvas (600,800);
  leSound.loop();
  amplitud = new p5.Amplitude();
  fft = new p5.FFT();

}

function draw() {
  background(0);
  
    var spectrum = fft.analyze();// espectro de volumen de sonido
  noStroke();
  fill(nivel,120,nivel); 
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 80, width);
    var h = -height + map(spectrum[i], 0, 500, height, 50);
    ellipse(x, width, width / spectrum.length, h)
  }
  
  leSound.setVolume(map(mouseX,0,600,0.0,1.0));//volumen de sonido mapeado
  //leSound.rate(map(mouseY, 0, 800, -1.0, 2));
  
  var nivel = amplitud.getLevel();//variable de volumen e imagen de mujer en bikini con transformacion en el tamaño
  nivel = map(nivel, 0.0, 1.0, 0, 600);
  tint(0,120,nivel);//color de tinta
  image(leImage,200,200,nivel,nivel);//mujer en bikini
  
 
  tint(nivel,120,80);//color de tinta
  image(leImagen,0,0,200,nivel);//pinas coladas con transformacion en el tamaño

  
  stroke(nivel,200,100);
  noFill();
  rect(190,50,20,nivel); // rectangulo derecho
  
  stroke(150,nivel,100);//rectangulo izquierdo 
  fill(150,nivel,100);
  rect(230,50,10,nivel); 
  
  fill(150,nivel,100);
  rect(550,600,5,15);
  rect(545,605,15,5);
  
  fill(150,nivel,100);
  rect(40,600,15,5);
  
  
  
  
  

  
  
  
  
}