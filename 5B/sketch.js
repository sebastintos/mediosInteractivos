var ano;
var mes;
var dia;

var hora;
var minuto;
var segundo;

var segundoMapeado;
var minutoMapeado;
var horaMapeado;

var contadorsegundos =0 ;
var contadorminutos =0 ;

function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(1);//esto significa que las imágenes se muestran una vez por segundo
   background(36,224,201);

} 


function draw() { 
 
  
  
  hora = hour();
  minuto = minute();
  segundo = second();
  
  
  
  
  translate(width/2,height/2);
  noFill();
  ellipse(0,0,340,340);
 
  
  
  
  push();
  segundoMapeado = map(segundo,0,59,0,359);//segundos y grados de circunferencia
  rotate(segundoMapeado);
  contadorsegundos=contadorsegundos+segundo;//como se muetran una vez por segundo,
  //hacemos un contador que sume los segundos que han pasado

      print(contadorsegundos);
  if(contadorsegundos==1770)//independientemente de en qué segundo empieza, la suma de
    //los segundos (osea 59+58+57...) va a ser siempre 1770, entonces cuando el contador
    //llega a este número se reinicia el contador y se pone un backgrouund sobre lo que
    //ya tenías dibujado
  {
  
	background(36,224,201);

  contadorsegundos=0;
 // fill(0,146,221);
  //rect(0,100,10,50);
  //rect(0,-100,10,10);
  }
    
  fill(0,146,221);
  rect(0,100,10,50);
	fill(125,0,100);
  rect(0,-100,10,10);
  pop();
  
  
  push();
	if(hora > 6 && hora < 9) {
    minuto = minuto - 5}
	if(hora > 14 && hora < 17){
		minuto=minuto+5}
  minutoMapeado = map(minuto,0,59,0,359); //minuto verde circulo
  rotate(minutoMapeado);
	contadorminutos=contadorminutos+minuto
	print(contadorminutos);
	if(contadorminutos==1770){
		background(36,224,201);
    contadorminutos=0
	}
  fill(0,200,10);
  ellipse(0,-170,20,20);
  pop();
	
  push();
   if(hora > 12) {
    hora = hora -12}
  horaMapeado = map (hora,0,11,0,359);
  rotate(horaMapeado);
	noStroke();
	fill(118,38,221);
  rect(0,-50,10,30);
  pop();
  
  
  
  
  
  


}