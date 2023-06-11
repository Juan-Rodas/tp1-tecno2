

//configuracion
let AMP_MIN = 0.1; // umbral mínimo de amplitud. Señal que supera al ruido de fondo
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
let img, img2;
let r, g, b, r2, g2, b2;

function setup(){

//cantidad de cuadrados en pantalla 
cantidad=4;
for(let i=0; i<cantidad; i++){
 cua1[i]= new Caminante();
}

for(let i=0; i<cantidad; i++){
  cua2[i]= new Caminante2();
 }

//las dos imagenes que conforman el fondo
img = loadImage('imagen/fondo1.png');
img2 = loadImage('imagen/fondo2.png'); 

//createCanvas(1200, 600);
createCanvas(windowWidth, windowHeight);

//colores del fondo
r = random(255);
g = random(255);
b = random(255);
r2 = random(255);
g2 = random(255);
b2 = random(255);

//audio
mic = new p5.AudioIn();
mic.start();
userStartAudio(); // esto lo utilizo porque en algunos navigadores se cuelga el audio

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
    }
    cua1[i].dibujar();
  }

  for(let i=0; i<cua2.length; i++){
    if(empezoElSonido){
    cua2[i].dibujar();
    }
    if(haySonido){
    cua2[i].mover();
    }
    cua2[i].dibujar();
  }
  //fondo
  tint(r, g, b);
  image(img, 0, 0);
  tint(r2, g2, b2);
  image(img2, 0, 0);

}