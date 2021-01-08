var fixedRect,movingRect;
var obj1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  obj1=createSprite(400,200,50,50);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if (isTouching(movingRect,obj1)){
 // movingRect.shapeColor="red";
 // obj1.shapeColor="red";
 movingRect.velocityX=-3;
 obj1.velocityX=3;
}
else{
  movingRect.shapeColor="green";
  obj1.shapeColor="green";
}
  drawSprites();
}
