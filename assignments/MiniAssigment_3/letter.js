class Letter {
  constructor(x, y){
    this.t = random(alphabets);
     this.x = x;
     this.y = y; 
     this.dy = 1;
  }
  
  display(){
  
  fill(255, 0, 0);
  textSize(20);
    textFont('monospace');
  //declare text and position
  text(this.t, this.x, this.y);
  
  
  }
  
  update(){
    
//get the color value of a specific pixel
//creates a 1D array of 4 values
//need to get the brightness value
    
  let color = video.get(this.x, this.y);
  let b = brightness(color);
  // print(color, b);
  
  if(b > thresValue * 100){
    this.y += this.dy;
  } else {
    if (this.y>0 && b<thresValue *100){
      this.y -= this.dy;
      color =video.get(this.x, this.y);
      b = brightness(color);
      }
    }
  }
  
}