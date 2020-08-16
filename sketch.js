var monkey , monkeyimg
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;

var survivaltime = 0;

var ground;

function preload(){
  
  
  monkeyimg = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png" ,"sprite_4.png" ,"sprite_5.png","sprite_6.png" ,"sprite_7.png" ,"sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,350,20,20);
  monkey.addAnimation("monkeyimg", monkeyimg);
  
  ground = createSprite(400,350,800,5);
  ground.velocityX = -4;
  
  monkey.collide(ground);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}

function draw() {
  background(225);
  
 
  monkey.scale = 0.1;
  
   monkey.collide(ground)
  
  spawnStones();
  spawnFood();
  
  if (ground.x<0 ){
       ground.x=ground.width/2 
   }
  
  monkey.velocityY = monkey.velocityY + 2;
  
  drawSprites();
  
     if (keyDown("space") ) {
 monkey.velocityY = -10;
       
  }  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival time: " + survivaltime, 100,50)
}

function spawnFood() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     
    banana.lifetime = 300;
      FoodGroup.add(banana);
  }
} 

function spawnStones() {
  if(frameCount % 300 === 0) {
    var stone = createSprite(800,330,10,40);
      stone.addImage(obstaceImage);
  stone.velocityX = -6;
   stone.scale = 0.1;  

  obstacleGroup.add(stone);
}
}
