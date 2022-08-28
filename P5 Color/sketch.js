const width = 400
const height = 400
const size = 200

const negro = document.getElementById("negro")
const amarillo = document.getElementById("amarillo")
const rosa = document.getElementById("rosa")
const salmon = document.getElementById("salmon")
const verde = document.getElementById("verde")
const clean = document.getElementById("clean")

let color = "#000000"

negro.onclick = ()=>{
  color = "#000000"
}

amarillo.onclick = ()=>{
  color = "#f5e960"
}

rosa.onclick = ()=>{
  color = "#dfb2f4"
}

salmon.onclick = ()=>{
  color = "#f49097"
}

verde.onclick = ()=>{
  color = "#8de7ce"
}

clean.onclick = ()=>{
  clean = true
}


// const transpanrency = (value)=>value*(255/100)

function setup() {
  createCanvas(width, height);
  background("#f2f5ff")
}

function draw() {
    
  if(clean){
    background("#f2f5ff")
    clean = false
  }

    // if(!mouseIsPressed){
      
    // }

  //   stroke("black")
  //   fill(245,233,96, transpanrency(50))
  //   ellipse(100,50,size,size)
  //   fill(223,178,244, transpanrency(50))
  //   ellipse(200,50,size,size)
  //   fill(244, 144, 151, transpanrency(50))
  //   ellipse(300,50,size,size)
  //   noFill()
  //   stroke("#f49097")
  //   ellipse(300,150,size,size)

  //   fill(141,231,192)
  //   noStroke()
  //   beginShape()
  //   vertex(50,350)
  //   vertex(100,350)
  //   vertex(100,300)
  //   vertex(150,300)
  //   vertex(100,250)
  //   vertex(150,250)
  //   vertex(150,250)
  //   vertex(75,175)
  //   vertex(0,250)
  //   vertex(50,250)
  //   vertex(0,300)
  //   vertex(50,300)
  //   endShape(CLOSE)
    

    if(mouseIsPressed){
    strokeWeight(3)
    stroke(color)
    line(mouseX,mouseY,pmouseX,pmouseY)
  //   // ellipse(mouseX,mouseY, 30)
   }

   if(keyIsPressed){
    background(0)
    fill(255)
    textSize(64)
    text(key,50,50)
   }else{
    background("#f2f5ff")
   }
  
}

//HACER UNA ESTRELLA CON BEGINSHAPE
//GENERAR UN PATRON (COLOCAR FONDO DE UN COLOR Y HACER CIRCULOS) QUE SE ILUMINEN LOS CIRCULOS AL PASAR EL CURSOR(CON UN CICLO FOR ANIDADO PARA FILAS Y PARA COLUMNAS) prueba