let valueX =  300
let valueY =  300
let pacmanSize = 100
let circleSize = 20
let puntos = 0

let circles = []
let circlesRed = []

function setup() {
  createCanvas(600, 600);

  for(let i=0;i<10;i++){
    circles.push({
      x:random(width),
      y:random(height)
    })
  }
  for (let i = 0; i < 4; i++) { 
    circlesRed.push({
        x: random(width),
        y: random(height)
    })
    }
}
  
  





function draw() {
    background(220); 

    drawPuntaje()
    // fill(255,255,255);
    // arc(160, 50, 80, 80, 9, PI/2, );



    // arc(240, 50, 80, 80, 0, PI/2 + 2*PI, PIE );


    // arc(350, 50, 80, 80, 23*PI/12, 3*PI/2, );


    // arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD)

    circles.forEach(circle=>{
      ellipse(circle.x,circle.y,circleSize)
    })

    circlesRed.forEach(circle=>{
      ellipse(circle.x,circle.y,circleSize)
      fill('#FF0000')
    })


  if(keyIsPressed){
    if(keyCode === LEFT_ARROW){
      valueX=valueX-1
    }else if(keyCode === RIGHT_ARROW){
      valueX=valueX+1
    }else if(keyCode === UP_ARROW){
      valueY=valueY-1
    }else if(keyCode === DOWN_ARROW){
      valueY=valueY+1
    }

  }
    verifyIfPacmanIsTouchingCircle()
    verifyIfPacmanIsTouchingCircleRed()
      
    



    fill(255, 204, 0);
    arc(valueX, valueY, pacmanSize, pacmanSize, PI/6, 11*PI/6, PIE );//pacman
    
    fill('#222222');
    ellipse(valueX, valueY-25, 15, 15);
    
    
}


// function keyPressed(){
//   if(keyCode === LEFT_ARROW){
//     valueX=valueX-1
//   }
// }

function verifyIfPacmanIsTouchingCircle(){
  const newCircles = circles.filter(circle=>{
    let distance = Math.sqrt(Math.pow(valueX-circle.x,2)+Math.pow(valueY-circle.y,2))
    if(distance>(pacmanSize/2 + circleSize/2)){
      return circles;
    }
    puntos++
      console.log(puntos)
  })

  circles = newCircles
}

function verifyIfPacmanIsTouchingCircleRed(){
  const newCirclesRed = circlesRed.filter(circle=>{
    let distance = Math.sqrt(Math.pow(valueX-circle.x,2)+Math.pow(valueY-circle.y,2))
    if(distance>(pacmanSize/2 + circleSize/2)){
      return circlesRed;
    }
    puntos--
      console.log(puntos)
    
  })

  circlesRed = newCirclesRed
}

function drawPuntaje(){
    fill(50)
    textSize(30)
    text("Puntaje: " + puntos, 10, 50)
    
}




// function drawPuntaje(){
//   ctx.font = "30px Arial";
//   ctx.fillText("Puntos: " + puntos, 10, 50);
  

// }

function CirclesPacmanTouch(){

}
