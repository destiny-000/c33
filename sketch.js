var bgImage;
var snow, snowImg; 

function preload(){
 bgImage = loadImage("snow2.jpg") ;
 snowImg = loadImage("snow5.webp");
}

function setup(){ 
  createCanvas(800,400);
  
}

function draw() {
  background(bgImage);  
  snowFall();
  drawSprites();
}

function snowFall(){
if(frameCount%60 === 0){
  snow = createSprite(Math.round(random(50,750)), -50, 50, 50);
  snow.velocityY = 3;
  snow.addImage(snowImg);
  snow.scale = 0.1 ; 
}
}