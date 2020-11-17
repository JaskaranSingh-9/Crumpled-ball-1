const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new Dustbin(720, 380, 100, 10);
  dustbin2 = new Dustbin(670, 350, 10, 70);
  dustbin3 = new Dustbin(770, 350, 10, 70);
  paper = new Paper(130, 360, 10);
  ground = new Ground(400, 390, 800, 10,
  {
    isStatic: true
  });
  
}

function draw() {
  
    background("black");
    textSize(20);
    
                
  
    rectMode(CENTER);
    background(0);
    dustbin.display();
    dustbin2.display();
    dustbin3.display();
    paper.display();
    ground.display();

  
}


function keyPressed(){
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
