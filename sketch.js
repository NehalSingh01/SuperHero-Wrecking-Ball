const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope , buildingImg;

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (600,600,1200,20);
  building =new Box (800,400,200,400);
  
  //box17 = new Box (300,100,100,50)

  ball = new Ball (200,200,80,80);
  rope = new Rope (ball.body,{x:450,y:50});
}

function draw() {
  background(180);
  Engine.update(engine);
    
  fill('Black');
  textSize(24);
  text("PRESS SPACE TO DEMOLISH MORE", 200,200);
  text("DRAG THE WRECKING BALL USING YOUR CURSOR", 200,100);

  ground.display();   
  building.display();
 // box17.display();
  ball.display();
  rope.display();

}
function mouseDragged() {
  Matter.Body.setPosition (ball.body,{x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(building.body,{x:800, y:400});
  }
}


