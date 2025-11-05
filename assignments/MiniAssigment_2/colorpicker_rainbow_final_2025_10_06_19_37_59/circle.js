class Circle {
  constructor(angle, c){
    //radius
    this.r = 100;
    this.angle = angle;
    this.size = 75;
    this.direction = -1.5;
    this.c = c;
    
  }
  
  //convert from polar to cartnesian
  update(){
    this.x = this.r*cos(this.angle);
    this.y = this.r*sin(this.angle);
    
    if(this.r < 20 || this.r > 200   ){
      this.direction = this.direction * -1;
    }
    if(mouseIsPressed){
    this.r = this.r + this.direction;
    }
     

   //  if(keyIsPressed){
   //  // overlapCircle();
   //    rotate(random(this.x, this.y));
   //     // rotate(this.y * this.r*sin) ;
   // }
    
  }

  
  display(){
   
    fill(this.c);
    
    ellipse(this.x, this.y, this.size, this.size);
    strokeWeight(20);
    line(0, 0, this.x, this.y)
  }
  
}