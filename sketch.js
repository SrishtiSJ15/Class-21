var fixedRect, movingRect, gameobj;
function setup() {

  createCanvas(800,400);

  fixedRect=createSprite(400, 300, 50, 50);
  movingRect=createSprite(400,100,20,60);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  gameobj=createSprite(250,100,70,30);
  gameobj.shapeColor="blue";
  movingRect.velocityY=5;
  fixedRect.velocityY=-5;
}

function draw() {
  background(0);  
  /*movingRect.y=mouseY;
  movingRect.x=mouseX;*/

  /*if (isTouching(movingRect,gameobj)){
    movingRect.shapeColor="red";
    gameobj.shapeColor="red";
  }
  else {
    movingRect.shapeColor="blue";
    gameobj.shapeColor="blue";
  }
  */
 bounceOff (movingRect,fixedRect);
  drawSprites();
}

