
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,paperObject;
var wall1, wall2, wall3;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground=createSprite(width/2, height-35,width,10);
	ground.shapeColor=("yellow");

	paperObject=createSprite(100,350,15,15);
	paperObject.shapeColor=("blue");

	var paperObject_options={
		 isStatic:false,
		 restitution:0.3,
		 friction:0.5,
		 density:1.2


	}

	wall1=createSprite(900,350,120,15);
	wall1.shapeColor=("white");

	wall2=createSprite(845,320,15,60);
	wall2.shapeColor=("white");

	wall3=createSprite(955,320,15,60)
    wall3.shapeColor=("white");

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
}

function keyPressed(){
 
	if(keyCode === UP_ARROW){

     Matter.Body.applyForce(paperObject.body,paperObject.body.positions,{x:100,y:-350});

	}


}



