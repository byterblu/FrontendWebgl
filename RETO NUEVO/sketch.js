

var cuadroX;
var cuadroY;
var velocidad = 5
var circleX = 1
var circleY = 1

var warzone;

function setup(){
  createCanvas(windowWidth, windowHeight)

  cuadroX = width/2
  cuadroY = height/2
  

  fill(255)
  noStroke()

  rectMode(CENTER)
  imageMode(CENTER)

}



function draw(){
  background(220)
  

  ellipse(cuadroX,cuadroY, 120, 120)
  image(warzone, cuadroX, cuadroY, 100, 100)

  cuadroX = cuadroX + (circleX*velocidad)
  cuadroY = cuadroY + (circleY*velocidad)

  if(cuadroY >=height){
    fill(255,0,0)
    circleY = circleY*-1
  }

  if(cuadroX >=width){
    fill(0,255,0)
    circleX = circleX*-1
  }

  if(cuadroY <= 0){
    fill(0,0,255)
    circleY = circleY*-1
  }

  if(cuadroX <= 0){
    fill(255,255,0)
    circleX = circleX*-1
  }



}

function preload(){
  warzone = loadImage('./assets/warzone.png')
}