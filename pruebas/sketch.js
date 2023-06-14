

//configuracion de amplitud
let AMP_MIN = 0.01;
let AMP_MAX = 0.1;

//entrada de audio
let mic;

//amplitud
let amp;
let haySonido = false;
let antesHabiaSonido = false;

// cuadrado y fondo
let cantidad;
let cua1 = [];
let cua2 = [];
let fon;

function setup(){

//cantidad de cuadrados en pantalla 
cantidad=4;
for(let i=0; i<cantidad; i++){
 cua1[i]= new Caminante();
}

for(let i=0; i<cantidad; i++){
  cua2[i]= new Caminante2();
 }
//fondo
  fon= new Fondo();

createCanvas(windowWidth, windowHeight);

//audio
mic = new p5.AudioIn();
mic.start();
userStartAudio();

}

function draw(){
  background(0);

  amp = mic.getLevel();
  haySonido = amp > AMP_MIN;
  let empezoElSonido = haySonido && !antesHabiaSonido; // EVENTO

  //cuadrados
  for(let i=0; i<cua1.length; i++){
    if(empezoElSonido){
    cua1[i].dibujar();
    }
    if(haySonido){
    cua1[i].mover();
    cua1[i].saltar();
    }
    cua1[i].dibujar();
  }

  for(let i=0; i<cua2.length; i++){
    if(empezoElSonido){
    cua2[i].dibujar();
    }
    if(haySonido){
    cua2[i].mover();
    cua2[i].saltar();
    }
    cua2[i].dibujar();
  }

  //fondo
    if(empezoElSonido){
    fon.dibujar();
    }
    if(haySonido){
    fon.saltar();
    }
    fon.dibujar();

}