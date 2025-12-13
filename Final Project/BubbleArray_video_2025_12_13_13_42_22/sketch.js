/*
----- Based on Tutorial by Patt Vira ----- 
Tutorial: https://www.youtube.com/watch?v=hHZcIMppkFc

future thoughts: 
//sliders for ellipse size, color values
//rewrite code to adjust to video sizes
*/

let vid; let w = 64; let h = 48; let scl = 10;

function setup() {
  createCanvas(w*scl, h*scl); 
  vid = createVideo("clips/tower2.mp4");
  vid.size(w, h);
  vid.loop();
  vid.hide();
  // noStroke();
}

function draw() {
  background(220);
  vid.loadPixels();
  
  for (let i=0; i<vid.width; i++) {
    for (let j=0; j<vid.height; j++) {
      // Using pixels 1D array
      let index = ((j * vid.width) + i)*4;
      let r = vid.pixels[index + 0];
      let g = vid.pixels[index + 1];
      let b = vid.pixels[index + 2];
      let a = vid.pixels[index + 3];
    
      
      let c = (r + g + b) / 3;
       
      
      // maps space/size in array. 
      // black ellipses are at 1 size 
      let s = map(c, 0, 100, 1, 20);
      fill(c);
      
      //  //for color sketches
      // fill (r, g, b, a);
      
      
      ellipse(scl/4 + i*scl, scl/10 + j*scl, s, s);
      
      
    }
  }
}