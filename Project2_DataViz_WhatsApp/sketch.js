let table; 
let timeInc = 100; 
let size = 4; let cx, cy;
let num;
let minR = 10;
let rings= [];
let palette = ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531"];

let alphaValOn = 255; let alphaValOff = 100;




function preload (){
  table = loadTable("callTracker1.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 500);
//   print(table.getRows());
  
  textFont("monospace");
  textSize(16);
  cx = width/2; cy = height/2;
  
  num = table.getRows().length;
  // print(num);
 
 for (let i=0; i<num; i++){ 
  let data = table.getRow(i);
  let date = data.getString("Date");
  let sleepTime = data.getString("Sleep Time");
  let wakeTime = data.getString("Wake Time");
  let r = minR + i*size;
  let c = random(palette);
  
   rings.push(new Ring (date, sleepTime, wakeTime, r, c));
 }
   

}

function draw() {
  background(200);
  
 for (let i=0; i<num; i++){ 
 rings[i].update();
 rings[i].display();
  
 }
 
  displayLabel();
  
}


function timeToColIndex(timeStr){
  let time = timeStr.split(":")
  let h = int(time[0]);
  let m = int(time[1]);
  
 let totalMinutes = 60 + m;
  let baseMinutes =  60;
  
  
  print(int(time[2]));
  
  
  if(totalMinutes < baseMinutes){
    totalMinutes += 60;
   }
  let timePassed = totalMinutes - baseMinutes ;
  let colIndex = round(timePassed);
  // print(colIndex);
  return(colIndex);
}

function displayLabel(){
  let angle = PI;
  let r = minR + 30 * size;
  let x = cx + r * cos(angle);
  let y = cy + r * sin(angle);
  
  stroke(0);
  strokeWeight(0.5);
  line(x, y, cx, cy);
  
  noStroke();
  fill(0);
  
  let hoveredRing = null;
  let label = "";
  for(let i=0; i<num; i++){
    if(rings[i].hovered){
      hoveredRing = rings[i];
      break;
    }
  }
  
  if(hoveredRing !=null){
  label = hoveredRing.date+ " , " +hoveredRing.callTime+ " to " +hoveredRing.wakeTime; 
  } else {
    label = "call tracker"
  }
      text(label, x, y - 5);

}