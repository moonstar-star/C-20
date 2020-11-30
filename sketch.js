var right, left


function setup() {
  createCanvas(1200,800);
 movingRect =  createSprite(400, 200, 80, 50);
 fixedRect = createSprite (600,200,60,90);

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 movingRect.debug = true;
 fixedRect.debug = true;

 bounceOff();

}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2  && 
  movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2  && 
  fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2  ){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
}
else
{
  movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

}

  drawSprites();

}

function bounceOff()
{
  left =  createSprite(300, 400, 80, 50);
  right = createSprite (800,400,60,90);   

  left.shapeColor = "green";
  right.shapeColor = "green";

  left.velocityX = 5;
  right.velocityX = -5; 

  if(left.x - right.x < left.width/2+right.width/2 && 
    right.x - left.x < left.width/2+right.width/ 2) {
      left.velocityX =  left.velocityX * (-1);
      right.velocityX =  right.velocityX * (-1);
    }
    if(left.y - right.y < left.width/2+right.width/2 && 
      right.y - left.y < left.width/2+right.width/ 2) {
        left.velocityY =  left.velocityY * (-1);
        right.velocityY =  right.velocityY * (-1);
      } 


}