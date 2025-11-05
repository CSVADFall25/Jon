let table;
let data;
let date, callDuration;

let palette = ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531"]; 


function preload(){
 table = loadTable('Fi_call_log.csv',  'csv', 'header');
}


function setup() {
  createCanvas(800, 800);
 
}
 

function draw() {
  background(100, 100, 100, 10);
 
   

  if(table){

//get the amount of rows     
  let numRows = table.getRowCount();
    
    //get the callduration column
   
  let callDuration= table.getColumn('call duration');
      
    
    let whoCalled= table.getColumn('who call who');
  
    print(callDuration);
    
    
    // translate(width/2, height/2);
    //iterate over the rows
    for (let i=0; i<numRows; i++){
      
      
      let x = 10;
      let y = 100 + (i*20);
      let w = callDuration[i] * 5;
      let h = 20;
    
      if(whoCalled[i] =='Fi'){
        fill("#62b6de");
      } else if (whoCalled[i] == "Penn"){
        fill("#f589a3")
      }
      
    rect(x+50, y, w, h);
      textSize(18);
    text(callDuration[i], x+14, y + 14);
       // text(whoCalled[i], x*50, y + 14);
      
     
      
    }
  }
  
   textSize(32);
  textFont('Courier New')
  fill("#62b6de");
  text("Me and My Boo", 50, 50);
  
  textFont('Helvetica')
  fill("#f589a3");
  textSize(20);
  text("Call Durations (Mins) in October", 50, 75);
  
  

}

