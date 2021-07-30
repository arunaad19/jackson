 var jackson_running;
 var jackson;
 var path;
 var bomb;
 var Bomb;
function preload(){
  //pre-load images
  jackson_running=loadAnimation("Runner-1.png","Runner-2.png");
  BGimage=loadImage("path.png");
  Bomb=loadImage("bomb.png");
}

function setup(){
  createCanvas(400,800);
  //create sprites here
  BG=createSprite(200,200);
  BG.addImage(BGimage);
  edges=createEdgeSprites();
  jackson=createSprite(200,600);
  jackson.addAnimation("player",jackson_running);
  jackson.scale=0.1;
  BG.velocityY=+5
  bomb=createSprite(200,200);
  bomb.addImage(Bomb);
  bomb.scale=0.2
    invisible=createSprite(350,400,25,600);
  invisible.visible=false;
  invisible1=createSprite(60,400,25,600)
  invisible1.visible=false;
   

  wall1=createSprite(200,50,600,25);
  wall1.visible=false;
  wall2=createSprite(200,600,600,25);
  wall2.visible=false;
}

function draw() {
  background("black");
  console.log(jackson.X)

  if (keyDown("left")){
    jackson.velocityX=-5;
  }
  if (keyDown("right")){
    jackson.velocityX=+5;
  }
  if (keyDown("up")){
    jackson.velocityY=-5;
  }
  if (keyDown("down")){
    jackson.velocityY=+5;
  }
  
  if (jackson.isTouching(bomb)){
    bomb.visible=false;
  }



  jackson.velocityX = jackson.velocityX + 0.5;
    if(BG.x<0){
    BG.x=BG.width/2;
  }
  
  jackson.collide(invisible1);
  jackson.collide(invisible);
  jackson.collide(wall1);
  jackson.collide(wall2);
 drawSprites();
}
