//create an array of modes to cycle through
let modes;
let modeIndex = 0;

//secondary colors array
let circles =[];
let count = 6;

//tertiary color array
let terCircles =[];
let terCount = 8;

//array for the angles
let angles = [];

let colors = [];
let currentIndex = 0;

// let cols, rows;
// let size = 10;



function setup() {
  createCanvas(600, 600);
  // cols = height/size;
  // rows = width/size;
  
  noStroke();
  textFont('Helvetica');
  textSize(18);

  
  //list the blend modes 
  modes = [
    { mode: DIFFERENCE, label: "Difference"},
    { mode:MULTIPLY,    label: "Multiply" },
    { mode: EXCLUSION,  label: "Exclusion" },
    { mode: BLEND,      label: "Blend"}
  ];
  
  
let colorRGB = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
  
let colorTerRGB = [color(255,0,128), color(127,255,0), color(0,128,255), color(0,255,128)];
  
  
  colors = [
    color(255, 255, 0), // yellow
    color(255, 0, 255), // magenta
    color(0, 255, 255)  // cyan
  ];

  
  for (let i = 0; i <count; i++) {
    colorRGB.push(circles[i] = new Circle(angles[i], colorRGB[i%3]));
       
  for (let i = 0; i <terCount; i++) {
    colorTerRGB.push(terCircles[i] = new TerCircle(angles[i], colorTerRGB[i%4]));
  }
   
  }

  
  for (let i =0; i<count;i++){
    //angle is determined by
    angles[i] = (TWO_PI/count) * i;
    
    // //angles need to referenced
    circles[i] = new Circle(angles[i], colorRGB[i%3]);
  }
  
  
  for (let i =0; i<terCount;i++){
    //angle is determined by
    angles[i] = (TWO_PI/terCount) * i;
    
    terCircles[i] = new TerCircle(angles[i], colorTerRGB[i%4]);
  
  }
  
}

function draw() {
  background(255);
  
  // for (i=0; i<cols; i++){
  //   for (j=0; j<rows; j++){
  //     line(i*size, j*size, size, size);
  //   }
  // }
  

   //call the label
    text(`Blend Mode: ${modes[modeIndex].label}  (keypress)`, 20, 20)
  fill(0);
  
  translate(width/2, height/2);

    // use push and pop to prevent flickering
    push() ; 
    blendMode(modes[modeIndex].mode);
 
   // Set fill to current color
  fill(colors[currentIndex]);
  noStroke();
  triangle(-100, 100, 100, 100, 0, -100);
  
    for (let i =0; i<count;i++){ 
      circles[i].update();
      circles[i].display();
        }
  
  for (let i =0; i<terCount;i++){
      terCircles[i].update();
      terCircles[i].display();
        }
  pop();
  
  }


function mousePressed() {
  // Go to the next color in the array
  currentIndex = (currentIndex + 1) % colors.length;
}

function keyPressed()
{
  modeIndex =(modeIndex + 1) % modes.length;
}

