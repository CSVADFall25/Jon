let video;
//make the video half the size
let w = 320; let h = 240;

let thresValue = 0.45;


let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


let letters = [];
let num = 30;
let colorPalette =["#f38eb0","#2EAA50", "#F9A825", "#5C6BC0"];




function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO);
  video.size(w, h);
  
  //test for letter creation
  // l = new Letter(width/2, 1);

  for(let i=0; i<num; i++){
    let x = width/num * i;
    let y = 1;
    letters[i] = new Letter(x, y);
 }
  
 
}

function draw() {
  background(220);
  image(video, 0, 0);
  // print(video.size());
  video.hide();
  
  //turn the video back&white using threshold... use filter function
  filter(THRESHOLD, thresValue);
  
   for(let i=0; i<num; i++){
    letters[i].update();
    letters[i].display();
  }
  
  //create a function which finds the color/pixels to change threshold value
  
  }


