
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var bobDiameter=40;
var startBobPosX=width/2;
var startBobPosY=height/4+500;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bob1=new Bob(startBobPosX-bobDiameter*2,startBobPosY,bobDiameter);
	bob2=new Bob(startBobPosX-bobDiameter,startBobPosY,bobDiameter);	
	bob3=new Bob(startBobPosX,startBobPosY,bobDiameter);
	bob4=new Bob(startBobPosX+bobDiameter,startBobPosY,bobDiameter);
	bob5=new Bob(startBobPosX+bobDiameter*2,startBobPosY,bobDiameter);

roof1=new Roof(width/2,height/4,width/7,20);

rope1=new Rope(bob1.body,roof1.body,-bobDiameter*2,0);
rope2=new Rope(bob2.body,roof1.body,-bobDiameter*1,0);
rope3=new Rope(bob3.body,roof1.body.body,0,0);
rope4=new Rope(bob4.body,roof1.body,bob.diameter*1,0);
rope5=new Rope(bob5.body,roof1.body,bob.diameter*2,0);





	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(230);
  
  //bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
 bob5.display()

roof1.display()

rope1.display()
rope2.display()
rope3.display()
 rope4.display()
 rope5.display()
}
function keyPressed(){
	if(keyDown==UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}


