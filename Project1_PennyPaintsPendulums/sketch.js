//CREDIT TO Pat Vira and her Pendelum Waves Piece. Love her. 
//https://www.youtube.com/watch?v=GqVyz-8AGcA&t=371s


// make a class & build pendeulum
//pendulums use tension, length and gravity
//adjust parameteres with sliders

//create paint effect.. find method

//add color picker 



let gravity = .01;
let p;
let b;
let trail = [];
let pendulums = [];
let num = 2;
let circleSize =5;
// let dampingOn = false;

       
function setup() {
  createCanvas(600, 500);
  background (255, 250, 160, 6);
  
  
  //4 loop for multiple pendulums
  // for( let i=0; i<num; i++){
  // for( let j=0; j<num; j++){
  
    //adds the class to  sketch
    p = new Pendulum(length);
    // b = new Pendulum2(length);
      // }

  
  // Text Values
  textSize(18);
  fill(145);
  
  //gravity label
  text('Gravity', 150, 450);
  
  
   // Gravity slider
  //map slider values
  gravitySlider = createSlider(0, 3, 0, 0);
  gravitySlider.position(80, 450);
  gravitySlider.style("width", "200px");
  
  //length label
  text('Length', 400, 450);
  
  //Length slider A
  lengthSliderA = createSlider(5, 300, 75, 10);
  lengthSliderA.position(340, 450);
  lengthSliderA.style("width", "200px");
  
 
  // length slider B
  //   lengthSliderB = createSlider(50, 400, 150, 1);
  // lengthSliderB.position(300, 360);
  // lengthSliderB.style("width", "100px");
  
  
  //pointer label
  text('Pointer Size', 350, 25);
  //pointer size
  circleSlider = createSlider(0, 25, 10, 1);
  circleSlider.position(340, 35);
  circleSlider.style("width", "100px");
  
  
  
  
}

function draw() {
  
    
  translate(width/2, height/2);
  
 
  
  // 4 loop to call functions
  for (let i=0; i<num; i++){ 
    for (let j=0; j<num; j++){
  
  //link gravity and length value to slider value 
  gravity = gravitySlider.value();
  p.length = lengthSliderA.value();
  p.circleSize = circleSlider.value();

  p.update();
  p.display();
     
      //Second pendulum
  // b.length = lengthSliderB.value();
  // b.update();
  // b.display();
    }

    
    // Create Trail or Paint effect
    //store value of x, y into array 
    //map trail length, map alpha value, push color value
    
  for(let i = 0; i < trail.length; i++){
    trail.push({x:x, y:y});
    // noFill();

    let p = trail[i];
    let alpha = map(i, 0, trail.length - 1, 0, 255);
    fill(c);
    let alphaValue = alpha(c);
    
    // add trail to position
     ellipse(p.x, p.y, 5, 5, 25);
    
     
    

  }  
    
 
  
  }

 }
  
  
