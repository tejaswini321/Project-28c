
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy, boyImage;
var backgroundIMG;
var stone;
var string;

function preload(){
	boyImage = loadImage("boy.png");
	backgroundIMG = loadImage("background.png");
}
	


function setup() {
	createCanvas(900, 700);

	boy = createSprite(200,590,40,40);
	boy.addImage(boyImage);
	boy.scale=0.1;
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(700,400,400,500);
	ground = new Ground();
	stone = new Stone(150,500,20);

	string = new String(stone.body,{x:150, y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  ground.display();
  stone.display();
  
  string.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    string.fly();
}


