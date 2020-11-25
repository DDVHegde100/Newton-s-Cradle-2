const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var bob1,bob2,bob3,bob4,bob5;
var engine, bodies, world;
function setup() {
  createCanvas(width/2,height/1.5);
  engine = Engine.create();
  world = engine.world;
  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  }
  mConstraint=MouseConstraint.create(engine, options);
  World.add(world,mConstraint);
  createSprite(400, 200, 50, 50);
  bob1= new Pendulum(50,50);
  bob2= new Pendulum(200,400,50,50);
  bob3= new Pendulum(250,400,50,50);
  bob4= new Pendulum(300,400,50,50);
  bob5= new Pendulum(350,400,50,50);
  sling1=new Sling();
  sling2=new Sling();
  sling3=new Sling();
  sling4=new Sling();
  sling5=new Sling();
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x:mouseX,y:mouseY});
}