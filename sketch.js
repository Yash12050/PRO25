
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50,650,15);
	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(400,700,800,10,options);
	World.add(world,ground);

	box1 = new Box(600,650,20,100);
	box2 = new Box(700,650,20,100);
	box3 = new Box(650,700,100,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

	box1.display();
	box2.display();
	box3.display();


  drawSprites();
	 ball.display();
	fill(200); 
	rect(ground.position.x,ground.position.y,800,10);
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-50});
	}
}

