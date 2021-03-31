var garden ,gardenImage;
var Tom,tom_siting,tom_standing,tom_running,TomAnimation;
var Jerry, jerry_one,jerry_four,jerry_teasing,JerryAnimation;

function preload() {
    //load the images here

  gardenImage = loadImage("images/garden.png");
  tom_siting = loadAnimation("images/tomOne.png");
  tom_running = loadAnimation("images/tomTwo.png","images/tomThree.png");
  jerry_teasing = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  jerry_one = loadAnimation("images/jerryOne.png");
  tom_standing = loadAnimation("images/tomFour.png");
  jerry_four = loadAnimation("images/jerryFour.png");
 

}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
   garden = createSprite(400,250,10,10);
   garden.addImage("garden",gardenImage);

   Tom = createSprite(615,440,10,10)
   Tom.addAnimation("Tom",tom_siting);
   Tom.scale = 0.1;
   Tom.setCollider("circle",0,0,2);

   Jerry = createSprite(100,445,5,5);
   Jerry.addAnimation("Jerry",jerry_one);
   Jerry.scale = 0.1;
   Jerry.setCollider("circle",0,0,2);
      

   }

function draw() {
    background("white");
    
    //Write condition here to evalute if tom and jerry collide
    if (Tom.x - Jerry.x < Tom.width/2 + Jerry.width/2){
      Tom.addAnimation("tom_standing",tom_standing);
      Tom.changeAnimation("tom_standing");
      Tom.velocityX = 0;
      Tom.scale = 0.1;
      Jerry.addAnimation("jerry_four",jerry_four);
      Jerry.changeAnimation("jerry_four");
      Jerry.scale = 0.1;
      
      
   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    Tom.addAnimation("tom_running",tom_running);
    Tom.changeAnimation("tom_running");
    Jerry.addAnimation("jerry_teasing",jerry_teasing);
    Jerry.changeAnimation("jerry_teasing");
    Tom.scale = 0.1;
    Jerry.scale = 0.1;
    Tom.velocityX = -3;
    
  
    
   }
}
