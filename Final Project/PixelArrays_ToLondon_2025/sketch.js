/*
----- Based on Coding from Allison Parrish, NYU and Jeff Thompson ----- 
Name: Coding Train Challenge #166
Video Tutorial: https://www.youtube.com/watch?v=FgR6PNwj80A
Website:  https://creative-coding.decontextualize.com/video/

*/  

let numFrames = 400;
let capture;
let vid;

function setup() {
  
  //must be above canvas
  vid = createVideo("clips/final.mp4");

  // need to create a canvas ID so the capture library can find it later
  let canvas = createCanvas(800, 800);
  canvas.id('canvas');  
  vid.loop();
  

  //   // vid.hide();
  
  noStroke();
  rectMode(CENTER);

  // formats include:
  // png, jpg, gif, and webm
  // name = name of folder (image files) or file (gif or video)
  capture = new CCapture( { format: 'png', name: 'frames' } );

  
}

function draw() {
  // with video it draws on the first frame, records 60 frames of black
 
  if (frameCount === 1) {
    capture.start();
    console.log('starting recording');
  }
  // and end when we've reached the # of frames desired
  if (frameCount === numFrames) {
    console.log('done recording');
    noLoop();
    capture.stop();   // stop recording
    capture.save();   // and prompt us to save the frames
    return;
  }

  // draw something
 background(50);
  fill(255);
  vid.loadPixels();
  
  
  // the offset is determining the spacing between pixels
  //cy controls the thickness of the horizontal banding 
  for (let cy =0; cy < vid.height; cy +=8){
  
  //cx controls the thickness of the vertical banding 
    for (let cx=0; cx < vid.width; cx += 3) {
      
      
    
      //we, we must use. This grabs the pixel data from the camera, which is larger than the canvas.  '
      let offset = ((cy*vid.width)+cx)*4;
      
      let xpos =(cx / vid.width) * width;
      let ypos =(cy / vid.height) * height;
      
      //we are manipulating the height of the pixels
      rect(xpos, ypos, 10,
      
      
      //It determines the scope of RGB values picked and drawn.
      // +0, +1, +2, moves the offset through the RGB array
      10 * (vid.pixels[offset+1] / 255));
        
  }
 }

 capture.capture(document.getElementById('canvas'));
}

