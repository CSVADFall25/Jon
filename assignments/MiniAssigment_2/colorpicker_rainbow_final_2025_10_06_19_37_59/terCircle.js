class TerCircle {
  constructor(angle, c){
    //radius
    this.r = 100;
    this.angle = angle;
    this.size = 50;
    this.direction = -3;
    this.c = c;
    
  }
  
  //convert from polar to cartnesian
  update(){
    this.x = this.r*cos(this.angle);
    this.y = this.r*sin(this.angle);
    
    if(this.r < 10 || this.r > 220   ){
      this.direction = this.direction * -1;
    }
    if(mouseIsPressed){
    this.r = this.r + this.direction;
    }
     
    
  }

  
  display(){
    fill(this.c);
    strokeWeight(20);
     line(0, 0, this.x, this.y)
    ellipse(this.x, this.y, this.size, this.size);
   
  }
  
}