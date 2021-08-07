
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;
var paper, paperImg;


function preload(){
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.5
	}
	paper = Bodies.rectangle(200,100,10,10,options);
	World.add(world, paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 
  groundObject.display();
  dustbinObj.display();
  imageMode(CENTER);
  image(paperImg, paper.position.x,paper.position.y,80,80);




}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:3,y:-3});
	}
}

