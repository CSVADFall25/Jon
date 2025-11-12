class Ring {
  constructor(date, sleepTime, wakeTime, r, c){
     this.date = date;
     this.callTime = sleepTime; 
     this.wakeTime = wakeTime;
     this.r = r;
     this.c = color(c);
    
     this.sleepCol = timeToColIndex(sleepTime);
     this.wakeCol = timeToColIndex(wakeTime);
     this.hovered = false;
     this.alphaVal = alphaValOff;

   
  }
  
  update(){
    //calcuate distance between mouse and ring
    let buffer = 5;
    this.hovered = false;
    for(let i =0; i<timeInc; i++){
       let angle = (TWO_PI /timeInc * i) + PI;
       let x = cx + this.r*cos(angle);
       let y = cy + this.r*sin(angle);
       let distance = dist(mouseX, mouseY, x, y);
      
      if(distance < buffer){
        this.hovered = true;
        break;
      }  
    }
    
    if(this.hovered){
      this.alphaVal = alphaValOn;
    } else{
      this.alphaVal = alphaValOff;
    }
  }
  
  display(){
  
  noStroke();
  for(let i =0; i<timeInc; i++){
    let angle = (TWO_PI / timeInc * i) + PI;
    let x = cx + this.r*cos(angle);
    let y = cy + this.r*sin(angle);
    
    if(i >= this.sleepCol && i <= this.wakeCol){
      this.c.setAlpha(this.alphaVal);
      fill(this.c);
    } else {
      fill(255, 25);
    }
    ellipse(x, y, size, size);
  }
 }
}