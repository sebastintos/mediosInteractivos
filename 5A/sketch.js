var ano;
var mes;
var dia;

var hora;
var minuto;
var segundo;

var segundoMapeado;
var minutoMapeado;
var horaMapeado;

function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(0);

} 


function draw() { 
  
  
  push();
  line(30,30,25,20);
  stroke(250,0,0);
  pop();
  

  
  ano = year();
  mes = month();
  dia = day();
  
  hora = hour();
  minuto = minute();
  segundo = second();
  
  push();
  stroke(100,0,100);
  strokeWeight(2);
  line(90,0,90,400);
  line(310,0,310,400);
  pop();
  
  translate(width/2,height/2);
  
  
 
  
  
  
  push();
  segundoMapeado = map(segundo,0,59,0,359);//segundos y grados de circunferencia
  rotate(segundoMapeado);
  //stroke(53,153,segundo);
  fill(0,146,221);
  ellipse(0,0,segundo,segundo);
  stroke(53,153,segundo);
  strokeWeight(1);
  line(0,0,0,0-100);
  pop();
  
  push();
  minutoMapeado = map(minuto,0,59,0,359);
  rotate(minutoMapeado);
  fill(0);
  ellipse(0,-80,15,15);
  pop();
  
  push();
  if(hora > 12) {
    hora = hora -12}
  horaMapeado = map (hora,0,11,0,359);
  rotate(horaMapeado);
  fill(0);
  ellipse(0,-60,10,10);
  pop();
  
  
  
  
  
  


}