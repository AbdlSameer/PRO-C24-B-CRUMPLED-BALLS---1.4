

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	


	


	engine = Engine.create();
	world = engine.world;

	
	

	

  box1 = new box(1200,650);
	//box2 = new box(1200,600,20,180);
	//box3 = new box(1395,600,20,180);

	ground1 = new ground(width/2,670,width,20)


  paper = new paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground1.display();
 box1.display();
 // box2.display();
 // box3.display();

  paper.display();
 
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.applyForce( paper.body,paper.body.position,{x:85,y:-85})
   }
}



