// the goal this sktech is to allow the user to select a region of their webcam video. Based on the color or brightness of the pixel, this would remap the THRESHOLD value. 

//unfortunately I could not get the maps to be mapped. I believe I cannot use the built in THRESHOLD value.

let video;
let selectedColor;
let threshold = null;

let w = 320; let h = 240;



let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


let letters = [];
let num = 30;



function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
   for(let i=0; i<num; i++){
    let x = width/num * i;
    let y = 1;
    letters[i] = new Letter(x, y);
  
  noSmooth();
  textFont('monospace');
}

function draw() {
  background(0);

  // Display video feed
  image(video, 0, 0);
  
   
 }
  
   //turn the video back&white using threshold... use filter function
  filter(THRESHOLD, threshold);
  
   for(let i=0; i<num; i++){
    letters[i].update();
    letters[i].display();
  }

  // Show selected color swatch
  if (selectedColor) {
    fill(selectedColor);
    rect(10, 10, 50, 50);
  }
  
  

  // Display current threshold
  // fill(255);
  // noStroke();
  // textSize(16);
  // text(`Threshold: ${threshold.toFixed(1)}`, 70, 40);
  // text("Click anywhere to map color → threshold", 10, height - 10);
}

function mousePressed() {
  // Grab the color under the mouse
  video.loadPixels();
 
  
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;
  let i = (mouseY * width + mouseX) * 4;
  selectedColor = color(
    video.pixels[i],
    video.pixels[i + 1],
    video.pixels[i + 2]
  );

  // Compute brightness and map to threshold range
  let b = brightness(selectedColor);  // 0–100
  threshold = map(b, 0, 100, 0, 1); // map brightness → threshold

  // try the hue value instead
  // let h = hue(selectedColor);
  // threshold = map(h, 0, 360, 0, 150);
}