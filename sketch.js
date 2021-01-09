
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	tree = new Tree(1300,375,100,50);
	ground = new Ground(800,height,1600,20);
	stone = new Stone(235,420,50,PI/2);

	slingshot = new Slingshot(stone.body,{x:270,y:465});

	mango1 = new Mango(1100,300,1);
	mango2 = new Mango(1200,250,1);
	mango3 = new Mango(1300,300,1);
	mango4 = new Mango(1300,200,1);
	mango5 = new Mango(1400,320,1);
	mango6 = new Mango(1250,325,1);
	mango7 = new Mango(1400,250,1);
	mango8 = new Mango(1350,150,1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  ground.display();
  image(boyImage, 350,550,250,350);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  slingshot.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32){
		//Matter.body.setPosition(stone.body, {x:235, y:420});
		slingshot.attach(stone.body);
    }
}

function detectCollision(s, m){
	mangoBodyPosition = m.body.position;
	stoneBodyPosition = s.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=m.r+s.r){
		Matter.Body.setStatic(m.body,false);
	}
}
