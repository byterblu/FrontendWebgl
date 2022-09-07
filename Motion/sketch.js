let radius = 40
let x = 110
let speed = 0.1
let direction = 1

const time1 = 5000
const time2 = 10000

let offSet = 200
let scala = 2

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
  background(0);
}

let angle = 0

function draw() {

// const currentTime = millis()

  // if(currentTime>time2){
  //   speed = 10
  //   } else if (currentTime > time1) {
  //     speed = 5
  //   }
  

  // x +=  speed * direction

  // if (x > width - radius || x < radius) {
  //     direction = -direction
  // }

  //MOVIMIENTO EN CIRCULOS
  // const y = map(sin(angle), -1, 1, 50, 350) 
  // const x = map(cos(angle), -1, 1, 50, 350) 
  
  //MOVIMIENTO EN ESPIRAL
  const y = offSet + sin(angle) * scala
  const x = offSet + cos(angle) * scala
  ellipse(x, y, 2, 2)


  // if(direction===1){
  //   arc(x, y, radius, radius, 0.52,5.76);
  // } else{
  //   arc(x, y, radius, radius, 3.67, 8.9);
  // }

  // const sinval = sin(angle)
  // print(sinval)
  // let gray = map(sinval, -1, 1, 0, 255)
  // background(gray)

  angle+=speed
  scala+=speed
}
