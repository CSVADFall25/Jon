/*
----- Based on Coding Tutorials by Daniel Schiffman and Patt Vira ----- 
Name: ASCII Art & Coding Train Challenge #166
Video Tutorial: https://youtu.be/4IyeLc6J1Uo
https://www.youtube.com/watch?v=55iwMYv8tGI

*/

let asciiChar = "UCSBGAUCHOucsbgaucho()1{}[]?-_+~<>i!lI;:,^`'. "
// let asciiChar = " .:-=+*#%@";

let video; let size = 4; let vidSize; 

function setup() {
  createCanvas(400, 400);
  vidSize = width / size;
  
  video = createVideo("clips/bikepath.mp4");
  video.loop();
  video.hide();
  video.size(vidSize, vidSize); 
}

function draw() {
  background(255);
  // image(vid, 0, 0);
  tint(255, 127);
  // image(video, 0, 0);
  // video.size(400,0);
  
  
  video.loadPixels();
  
  /* ---- Uses pixels ---- */
  for (let i=0; i<video.width; i++) {
    for (let j=0; j<video.height; j++) {
      let pixelIndex = (i + j*video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      
      // let bright = brightness(color(r, g, b))
      //creates average of brightness
      let bright = (r + g + b) /3 ;
      
      // turn values into integer & tIndex has be RGB value of 255
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      
      let x = i*size + size;
      let y = j*size + size;
      
        // uses method to return the character at a specified index.
      let t = asciiChar.charAt(tIndex);
      stroke(255);
      textSize(size);
      textAlign(CENTER, CENTER);
      text(t, x, y);
      
      
    }
  }
}
  function keyPressed(){
    if (key == 's'){
      saveGif('ucsb.gif', 3);
    }
  
}