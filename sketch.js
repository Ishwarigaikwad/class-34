const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine,myWorld;
var ground,ball;


function setup() {
createCanvas(1200,1200);
myEngine = Engine.create();
myWorld = myEngine.world;
ground = new Ground(600,600,1200,20);
}

function draw() {
  
background(255,255,255);
ground.display();  
drawSprites();
}