class Caminante2 {

    constructor(){
     this.img1 = loadImage('imagen/cuadrado1.png');
     this.img2 = loadImage('imagen/cuadrado2.png');
     this.t1=(height-500);
     this.r = random(255);
     this.g = random(255);
     this.b = random(255);
     this.r2 = random(255);
     this.g2 = random(255);
     this.b2 = random(255);
    }
    prueba(){
      this.x1=random(400,width);
      this.y1=random(500,height);
    }

    saltar(){
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.r2 = random(255);
      this.g2 = random(255);
      this.b2 = random(255);
    }

  dibujar() {
    this.m=random(5, 10);//en mi computadora se ve un poquito lento pero se podria cambiar por (5,8) 

    tint(this.r, this.g, this.b, 400);
    image(this.img1,this.x1,this.y1,this.t1/2,this.t1);
    tint(this.r2, this.g2, this.b2, 300);
    image(this.img2,this.x1,this.y1,this.t1/2,this.t1);
  }
  mover(){
  
    if (this.y1>height-(this.t1/4)) {
      this.y1=400;
      this.x1=random(300,height+200);
    }
    this.y1 +=this.m;  
  }
  
  }