class Pendulum {
  constructor(length, picker, pickerX, pickerY){
    this.length = length; 
    this.angle = 180;
    this.angleV = 0; 
    this.angleA = 0;
    this.p = p;
    this.trail = [];
    this.circleSize = circleSize;
    
    //color picker
    this.picker = createColorPicker("#b3ebf2");
    this.picker.position(35, 35);
    
  }
  
  update(){
    
    //physics operations
  this.angleA = -gravity / this.length * sin(this.angle);
  this.angleV += this.angleA;
  this.angle += this.angleV;
  
      //create circular motion.
   this.x = this.length * sin(this.angle);
   this.y = this.length * cos(this.angle);
    
  }
  
  display(){
  
   let c = this.picker.color();
   fill(c);
   
   //draw circle pointer, indicator for draw length and position 
    
   let alphaValue = alpha(c);
   fill(alphaValue);

    
    
      stroke(c)
      line(20, 20, this.x, this.y);
      ellipse(this.x, this.y, this.circleSize, this.circleSize, 75);
        
     
      //center ball
     strokeWeight(2);
      ellipse(0, 0, 55, 55, 75); 
      

  }
}