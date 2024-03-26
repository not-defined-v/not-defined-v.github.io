let starsCanvas;
let segment = 2;
let segment_1_event = [0, 0, 0, 0, 0];
let i = 0;
let stars = [100];
/*-------TIME PARAMS----*/
  let myYear;
  let myMonth;
  let myDay;
/*---------------------*/

function preload(){
  SGB = loadFont("fonts/SpaceGrotesk-Bold.ttf");
  BC = loadFont("fonts/BLKCHCRY.TTF");
  OB = loadFont("fonts/Orbitron-Bold.ttf");
  moon = loadImage("pics/moon.png");
}

function setup() {
  //if(windowWidth < 400){
    //createCanvas(1080, 720);
  //}
  //else{
    createCanvas(windowWidth, windowHeight);
  //}
  
  starsCanvas = createGraphics(1080 / 2, 720 / 2);
  
  background(20, 25, 30);
  for( i = 0; i < 1000; i++){
      drawStars(random(0, width), random(0, height));
  }
  
  moon.resize(200, 200);
  image(moon, width - 250, height/15);
  
}

function draw() {
  
  // Branch from here based on the date
  // Target date and times for conditional branching
  const targetDate = new Date(2024, 2, 27); // 27TH MARCH 2024
  const startTime = new Date(targetDate);
  const endTime = new Date(targetDate);
  endTime.setHours(24); // Set end time to 24:00

  // Get current time in UTC to ensure consistency
  const now = new Date();
  const myTime = day();
 
  const nowUTC = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
  
  /*-------TIME PARAMS----*/
  myYear = year();
  myMonth = month();
  myDay = day();
  
  /*---------------------*/
  
  if ( (myYear <= 2024) && (myMonth <= 3) && (myDay < 27) ) {
    //BEFORE 27TH MARCH 2024
    //background(10);
    background(20, 25, 30);
    //console.log(nowUTC);
    const remainingTime = targetDate - nowUTC;
    const formattedTime = formatTime(remainingTime); // Format the time as desired

    // Center the text on the canvas
    stroke(170);
    strokeWeight(4);
    textStyle(BOLD);
    textFont(SGB); // Load your special font
    
    textAlign(CENTER, CENTER);
    textSize(windowWidth/10); // Adjust text size as needed
    fill(200, 0, 200, 10);
    text(formattedTime, width / 2, height / 2);
    
    let waitButtonWidth = 100;
    let waitButtonHeight = 30;
    /*let waitButtonPosX = width
    let waitButtonPosY =*/
    waitButton(waitButtonWidth, waitButtonHeight);
    
  } else if ( (myYear >= 2024) && (myMonth >= 3) && (myDay > 27) ){
    //AFTER 27TH MARCH 2024
    background(20, 25, 30);
    for( i = 0; i < 1000; i++){
      drawStars(random(0, width), random(0, height));
    }
    /*for( i = 0; i < 40; i++){
      drawBigStars(random(0, width), random(0, height));
    }*/
    
    // Event 2 or 3 logic here, if applicable
    stroke(255);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    textSize(36); // Adjust text size as needed
    
    fill(150, 100, 20);
    text("COME BACK HERE FOR 2025!", width / 2, height / 2);
    text("CELEBRATION IS OVER!", width/2, height/ 4);
    clear();
  }
  else if (1 || (myYear == '2024') && (myMonth == '2') && (myDay == '6') ){
    //console.log("GRAND DAY!");
    
    grandEvent();
  }
  else {
    console.log("Something went wrong!");
    text("WHAT ARE YOU TRYING TO PULL?!", width/2, height/2);
    text("INVALID TIME!", width/2, height/0.5);
  }
}

// Helper function to format the remaining time
function formatTime(time) {
  // Implement your desired formatting logic here, e.g.,
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function waitButton(waitButtonWidth, waitButtonHeight){
    fill(255);   
    rectMode(CENTER);
    rect(width/2, height/1.3, waitButtonWidth, waitButtonHeight);
    textSize(20);
    fill(100, 100, 0);
    text("START", width/2, height/1.316);
}

/*
function mouseIsPressed(){
  if(mouseX mouseY)
}*/



function grandEvent(){
  //background(30);
  switch(segment){
    case 1: 
      segment_1();
      //console.log(segment);
      break;
      
    case 2:
      segment_2();
      //console.log(segment);
      break;
      
    case 3:
      console.log(segment);
      break;
    default:
      segment = 1;
      //console.log("DEFAULT " + segment);
      break;
         }
  
}

let message1 = "Hey, Ria!";
let message2 = "It has been...";
let message3 = "\n       ...since we became friends!";
let emoji1 = ':)';

let message4 = "I wish you a very happy birthday, girl! :\)";
let message5 = "\"May you be happy,\n May you be healthy,\n May you be safe,\n May you live with ease.\"";
//let message6 = "May you be safe,\nMay you live with ease.\"";

function segment_1(){
  // formatting
  //background(20);
  let message1Color = fill(150, 200, 250);
  if(!segment_1_event[0]){
        segment_1_event[0] = typingSimulator(message1, width/12, height/8, 35, 200, message1Color);
}
  if((segment_1_event[0] == 1) && (!segment_1_event[1])){
    
    // message1 again
    textFont(BC);
    textSize(35);
    stroke(200);
    //strokeWeight();
    text(message1, width/12, height/8);
    
    // message 2
    segment_1_event[1] = typingSimulator(message2, width/12, height/3, 35, 200, message1Color);
  }
  
  if( (segment_1_event[1] == 1) && (!segment_1_event[2]) ){
    // message1 again
    textFont(BC);
    textSize(35);
    stroke(200);
    strokeWeight();
    text(message1, width/12, height/8);
    
    // message2 again
    textFont(BC);
    textSize(35);
    stroke(200);
    strokeWeight();
    text(message2, width/12, height/3);
    
    counter1();
    
    // message 3
    segment_1_event[2] = typingSimulator(message3, width/12, height/1.5, 35, 200, message1Color);
  }
  
  //segment = 2;
  
  //text(message1, width/2, height/2);
}

function segment_2(){
  let message1Color = fill(150, 200, 250);
  if(!segment_1_event[0]){
        segment_1_event[0] = typingSimulator(message1, width/12, height/3.5, 60, 20, message1Color);
}
  if((segment_1_event[0] == 1) && (!segment_1_event[1])){
    
    // message1 again
    textFont(BC);
    textSize(60);
    stroke(20);
    strokeWeight(3);
    text(message1, width/12, height/3.5);
    
    // message 2
    segment_1_event[1] = typingSimulator(message4, width/12, height/2.5, 60, 20, message1Color);
  }
  
  if((segment_1_event[1] == 1) && (!segment_1_event[2])){
    
    // message1 again
    textFont(BC);
    textSize(60);
    stroke(20);
    strokeWeight(3);
    text(message1, width/12, height/3.5);
    
   /*// message4 again
    textFont(BC);
    textSize(50);
    stroke(200);
    //strokeWeight();*/
    text(message4, width/12, height/2.5);
    
    // message5
    segment_1_event[2] = typingSimulator(message5, width/3, height/1.5, 40, 20, message1Color);
  }
  /*
  
  if((segment_1_event[2] == 1) && (!segment_1_event[3])){
    
    // message1 again
    textFont(BC);
    textSize(50);
    stroke(200);
    //strokeWeight();
    text(message1, width/12, height/8);
    
    // message4 again
    textFont(BC);
    textSize(50);
    stroke(200);
    //strokeWeight();
    text(message4, width/12, height/3);
    
    // message5 again
    textFont(BC);
    textSize(40);
    stroke(200);
    //strokeWeight();
    text(message5, width/3, height/1.5);
    
    // message6
    segment_1_event[3] = typingSimulator(message6, width/3, height/1.5, 40, 200, message1Color);
  }*/
}

function segment_3(){
  counter1();
}

let currentCharacter = 0;
function typingSimulator(message, Xpos, Ypos, TextSize, Stroke, Fill){
  push();
  let currentString = message.substring(0, currentCharacter);
  
  
  textFont(BC);
  textSize(TextSize);
  stroke(Stroke);
  strokeWeight(3);
  fill(90, 200, 150);
  text(currentString, Xpos, Ypos);
  
  currentCharacter += 0.08;
  
  pop();
  
  if(currentCharacter >= message.length + 5){
    currentCharacter = 0;
    return true;
  }
}

let formatCounter1;
let march272022 = [2022, 03, 27];
function counter1(){
  push();
  noStroke();
  textStyle(BOLD);
  textFont(BC); // Load special font
  fill(200, 200, 200);
  textAlign(CENTER, CENTER);
  textSize(36); // Adjust text size as needed
  
  formatCounter1 =  "1/2 decade " + (myMonth - 2) + "mths " + abs(myDay - 15) + "days ";
  text(formatCounter1, width / 2, height / 2);
  pop();
  
}