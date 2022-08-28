let Circlex = 1;
let Circley = 1;
const circleSize = 90
let overBox = false;
// let locked = false;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#808080");


    // fill("#FFFFFF")
    // beginShape()
    // vertex(130,10)
    // vertex(150,90)
    // vertex(220,90)
    // vertex(160,130)
    // vertex(180,220)
    // vertex(130,160)
    // vertex(80,220)
    // vertex(100,130)
    // vertex(40,90)
    // vertex(110,90)
    // endShape(CLOSE)


      // for (var i = 1; i <= 15; i++){
      // ellipse(i,i,80,80);
      // }
  
      if(overBox === true){
        fill("green");
        for (Circlex = 0; Circlex <= 10; Circlex++) {
          for (Circley = 0; Circley <= 10; Circley++) {
            ellipse(Circlex*90,Circley*90,circleSize,circleSize)
          }}
      }else{
        fill("grey");
        for (Circlex =0; Circlex <= 10; Circlex++) {
          for (Circley = 0; Circley <= 10; Circley++) {
            ellipse(Circlex*90,Circley*90,circleSize,circleSize)
          }}
      }
      
      // for (Circlex = 0; Circlex <= 2; Circlex++) {
      //   for (Circley = 0; Circley <= 2; Circley++) {
      //     ellipse(Circlex,Circley,circleSize,circleSize)
      //   }}


          overCircle()
 }

 



 function overCircle(){
    // for (Circlex = 0; Circlex <= 2; Circlex++) {
    //     for (Circley = 0; Circley <= 2; Circley++) {
    //       ellipse(Circlex*90,Circley*90,circleSize,circleSize)
    //     }}

    if (
      mouseX > Circlex - circleSize &&
      mouseX < Circlex + circleSize &&
      mouseY > Circley - circleSize &&
      mouseY < Circley + circleSize) 
      { overBox = true;
      }  else{
        overBox = false;
      }
 }


