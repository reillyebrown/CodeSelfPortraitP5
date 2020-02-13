var state;
var stateStatic = 0;
var stateBlink = 1;
var stateCheek = 2;
var stateEyebrowRaise = 3;


var cheekOne = ['#f54287','#fa8cdd','#ebb5f7','#ffa587','#ff571f'];
var numCheekOne = 5;
var curCheekOne = 0;
var numCheekTwo = 6;
var curCheekTwo = 0;
var cheekTwo = ['#e3a996','#ff4049','#f5c1c4','#eec1f5','#ffa666'];


var spot = {
  x: 100,
  y: 300,
}


var col = {
  r: 255,
  g: 20,
  b: 255,
}



function setup () {
    createCanvas (1000, 700);
    
   state = stateStatic;
  }


function draw () {


    
  print(mouseX + " : " + mouseY);
  
  
  function drawBackground(){
     
    strokeWeight(15);
    stroke(230, 149, 92);
   
        
    background (247, 188, 146);
    

  //background pattern
    
    fill(col.r, col.g, col.b);
    color.r = random(0, 255);
    color.b = random(0, 255);
      for (var a = 10; a <= width; a = a + 100){
     
      rect(a, 20, 50, 50);
      }
      for (var b = 10; b <= width; b = b + 100){
      
      rect(b, 100, 50, 50);
      }
      for (var c = 10; c <= width; c = c + 100){
     
      rect(c, 180, 50, 50);
      }
      for (var d = 10; d <= width; d = d + 100){
      
      rect(d, 260, 50, 50);
     }
      for (var e = 10; e <= width; e = e + 100){
      
      rect(e, 340, 50, 50);
     }
      for (var f = 10; f <= width; f = f + 100){
      
      rect(f, 420, 50, 50);
     }
     for (var g = 10; g <= width; g = g + 100){
     
    rect(g, 500, 50, 50);}
    
    for (var h = 10; h <= width; h = h + 100){
    
    rect(h, 580, 50, 50);
    }
    for (var i = 10; i <= width; i = i + 100){
    
    rect(h, 560, 50, 50);
    }
    for (var j = 10; j <= width; j = j + 100){
   
    rect(j, 660, 50, 50);
    }
    
 
 
  //background hair
    fill(219, 167, 20);
    noStroke();
    rect(318, 430, 340, 1000);
    
  }
  
  function drawBody(){
  //body

  //neck
    noStroke();
    fill (229, 205, 170); 
    rect(445, 470, 100, 100);
    
   //shoulders
  //shoulder 1
    triangle(446, 549, 304, 586, 457, 602);
    
       
  
  //shoulder 2
    triangle(545, 550, 673, 583, 544, 599);
       
  //body
    rect(308, 583, 370, 200);
        
    rect(445, 545, 100, 100);
        
  //shirt
  //strap 1
    stroke(225, 113, 80);
    strokeWeight(4);
    line(373, 571, 380, 614);
         

  //strap 2
    stroke(225, 113, 80);
    strokeWeight(4);
    line(606, 567, 594, 614);
        
  //top
    fill(225, 113, 80);
    rect(378, 616, 219, 100);
         
    

//face
   frameRate(12);
   //print(mouseX + " : " + mouseY);
   fill (247, 220, 176); 
  noStroke();
  ellipse (495, 297, 300, 380);
    
  }

  drawBackground();
  drawBody();
  
  
 
  eyes();
  lips();
  drawBrows();
  drawNose();
  drawCheeks();
  drawHair();
  drawEar();
   drawFreckles();


  
  //eye1
  
 
  function eyes () {

  fill (249, 246, 242);
        
     noStroke();
     ellipse (426, 266, 50, 35);
  
     fill (249, 246, 242); 
     noStroke();
     triangle(393, 267, 409, 279, 407, 254); 
  
     fill (249, 246, 242); 
     noStroke();
     triangle(431, 248, 434, 283, 460, 266);

  
//eye2
    fill (249, 246, 242); 
    ellipse (562, 266, 50, 35);
 
 
    fill (249, 246, 242); 
    noStroke();
    triangle(551, 251, 550, 281, 525, 266);
  
    fill (249, 246, 242); 
    noStroke();
    triangle(567, 249, 570, 283, 597, 265);
  
//iris1
    stroke(58, 29, 0);
    strokeWeight(2);
    fill (104, 86, 64); 
    ellipse(425, 266, 30, 30);
  
  
//iris2
     stroke(58, 29, 0);
     strokeWeight(2);
     fill (104, 86, 64); 
     ellipse(561, 266, 30, 30);
  
 //pupil1
    fill (0); 
    noStroke();
    ellipse(425, 266, 15, 15);
  
 //pupil2
    fill (0); 
    noStroke();
    ellipse(561, 266, 15, 15);
  
 //light1
    fill (249, 246, 242);
    ellipse(430, 266, 5, 5);
  
//light2
    fill (249, 246, 242);
    ellipse(566, 266, 5, 5);
  
//eylid1

    fill(249, 208, 143);
   arc(424, 261, 60, 25, PI,TWO_PI);
  
//eylid2
   fill(249, 208, 143);
   arc(561, 261, 60, 25, PI,TWO_PI);

  
  
//eyeliner1
   stroke(91, 46, 2);
   strokeWeight(3);
   line(393, 263, 428, 262);
  
  //eyelashes first eye
  
   //1
    stroke(91, 46, 2);
    strokeWeight(1);
    line(393, 263, 383, 262);
  
    stroke(91, 46, 2);
    strokeWeight(1);
    line(393, 265, 384, 262);
   
   //2
  
    stroke(91, 46, 2);
    strokeWeight(1);
    line(398, 264, 390, 258);
  
    //3
  
    stroke(91, 46, 2);
    strokeWeight(1);
    line(402, 264, 398, 258);
 
//eyeliner1
  
     stroke(91, 46, 2);
     strokeWeight(3);
     line(559, 262, 590, 262);
  
  //eyelashes second eye
  
   //1
    stroke(91, 46, 2);
    strokeWeight(1);
    line(593, 262, 600, 260);
  
    stroke(91, 46, 2);
    strokeWeight(1);
    line(591, 261, 599, 260);
   
    //2
  
    stroke(91, 46, 2);
    strokeWeight(1);
    line(584, 263, 588, 257);
  
    //3
  
     stroke(91, 46, 2);
    strokeWeight(1);
    line(576, 264, 579, 257);
  
  }
  
   if( state == stateBlink ) {   
     drawBlink();
    }
  
  
  
function drawBlink() {
    noStroke(0);
    fill(249, 208, 143);
    arc(424, 278, 75, 60, PI,TWO_PI);
    arc(561, 278, 75, 60, PI,TWO_PI); 
    state = stateStatic;
}
    
  
  
function lips () {
  


  noStroke();
  fill(247, 220, 176); 
 
    noStroke();
    fill(221, 160, 153);
  
   //lips

  fill(221, 160, 153);

  ellipse(478, 412, 30, 15);
  ellipse(505, 412, 30, 15); 


 //corners
   triangle(437, 409, 467, 407, 472, 430);
 
 //bottom lip
       fill(221, 160, 153);
       ellipse(478, 423, 30, 15);
       ellipse(505, 423, 30, 15); 
       
 
 //corners
      triangle(509, 406, 508, 432, 543, 407);
  

}

function drawBrows()
  {
    
  
//eyebrow1
    fill (130, 96, 52); 
    noStroke();
    triangle(410, 220, 410, 230, 388, 233);
//eyebrow1
    fill (130, 96, 52); 
    noStroke();
    rect(409, 220, 50, 10);
  
  
//eyebrow2
    fill (130, 96, 52); 
    noStroke();
    rect(530, 220, 50, 10);
  
    fill (130, 96, 52); 
    noStroke();
    triangle(579, 219, 578, 230, 605, 235);
    
    
    if( state == stateEyebrowRaise ) {   
     drawEyebrowRaise();
    }
  
  
  
function drawEyebrowRaise() {
    noStroke(0);
   rect(530, 215, 50, 10);
  rect(409, 215, 50, 10);
  
    fill (247, 220, 176); 
  rect(530, 225, 50, 10);
   rect(409, 225, 50, 10);
  
    state = stateStatic;
}
    
  
    
    
    
    //if (keyIsPressed) {
  // if ((key == 'a')||(key=='A')){
    
   // fill (130, 96, 52); 
   // noStroke();
    //rect(409, 200, 50, 10);
   // rect(530, 200, 50, 10);
   }
   // }
      
 // }


  function drawNose(){
  
  
//nose
  
    fill (232, 204, 163);
    triangle(492, 260, 476, 348, 505, 348);
    
//nostril 1
    ellipse(480, 350, 20, 20);
    
//nostril 2
    ellipse(499, 350, 20, 20);
    
//septum
    ellipse(489, 356, 15, 15);
  
    
  }
  
  
//Cheeks
  
  
  function drawFreckles(){
    
    noStroke(); 
    //freckles
    
    
    col.r= random(255,255);
    col.g = random(230, 100);
    col.b = random(0, 255);
    
    
    fill(col.r, col.g, col.b);
      
     ellipse (463,318,4,2);
      
     ellipse (468, 332,3,2);
        
     ellipse (440, 317,2,2);
            
     ellipse (425, 315,2,2);
             
     ellipse (479,315,1,2);
               
     ellipse (489, 327,1,2);
     
     ellipse (495,336,1,3);
     
     ellipse (502,323,2,3);
     
     ellipse (509,333,4,3);
     
     ellipse (521,325,3,2);
     
    ellipse (527,334,2,2);
    
    ellipse (534, 323,2,1);
    
    ellipse (515,315,2,1);
    
  }

  
  function drawCheeks() 
{
 
    
  //Cheek 1
  fill(255, 168, 212);
    ellipse (429,331,40,20);
 
  
  
//Cheek 2
    fill (255, 166, 213);
    ellipse (559,331,40,20);
  
   }
  
  
  if( state == stateCheek ) {   
     drawCheek();
    }
  
  
  
function drawCheek() {
  
   fill(255, 0, 200);
     ellipse(559, 331, 40, 20);
    fill(255, 166, 102);
      ellipse (429,331,40,20);
  
    state = stateStatic;
}

   
    
    function drawHair(){
    
 //hair
 
 //triangle 1
  fill(219, 167, 20);
     triangle(483, 103, 351, 244, 376, 118);
 
 //triangle 2
     fill(219, 167, 20);
     triangle(484, 103, 639, 247, 610, 117);
 
 //arc
     fill(219, 167, 20);
     arc(493, 130, 240, 120, PI,TWO_PI);

//triange 3
     fill(219, 167, 20);
     triangle(354, 240, 394, 485, 312, 492);
 
 
     fill(219, 167, 20);
     arc(380, 270, 100, 300, radians(100), radians(320));

//triange 4
     fill(219, 167, 20);
     triangle(636, 245, 602, 491, 666, 493);
    

 

 
     fill(219, 167, 20);
     arc(610, 280, 100, 300, radians(240), radians(460));

//rectangle 
    fill(219, 167, 20);
    rect(312, 482, 83, 70);
 
    fill(219, 167, 20);
    rect(600, 422, 61, 140);
    

    
    //streaks
    stroke(173, 117, 3);
    line(625, 224, 629, 340);
    line(521, 120, 609, 180);
    line(439, 115, 387, 167);
    line(371, 198, 355, 269);
     line(352, 313, 359, 461);
      line(619, 400, 615, 515);
      line(379, 443, 383, 543);
    
  }
      
  
  function drawEar(){
 
 //ear 1
     noStroke();
     fill (247, 220, 176); 
     ellipse(375, 315, 30, 50);
 
 //inside ear
     fill (232, 204, 163);
     ellipse(375, 315, 20, 25);
 //earring 1
     noFill(); 
     stroke(158, 116, 0);
     arc(363, 304, 10, 10, 0, PI+HALF_PI);

}


}

function keyPressed() {
 if(key=='1') {
     state=stateBlink;
  
 }
  
     if(key=='2') {
    state=stateCheek;
    
 
  }

  
  
  if(key=='3') {
    state=stateEyebrowRaise; 
 
}
}



