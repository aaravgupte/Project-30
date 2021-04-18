const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	ground1 = new ground(650,600,1300,30);
	ground2 = new ground(400,390,250,20);
	block1 = new Block(330,235,30,40);
	block2 = new Block(360,235,30,40);
	block3 = new Block(390,235,30,40);
	block4 = new Block(420,235,30,40);
	block5 = new Block(450,235,30,40);
	block6 = new Block(360,195,30,40);
	block7 = new Block(390,195,30,40);
	block8 = new Block(420,195,30,40);
	block9 = new Block(390,155,30,40);
    polygon1 = new Polygon(100,400,50);
	slingshot = new SlingShot(polygon1.body,{x:100,y:400})
	Engine.run(engine);
}

function draw(){
background(230);
text(mouseX + " "+mouseY,mouseX,mouseY)
ground1.display();
ground2.display();
fill("red");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("orange");
block6.display();
block7.display();
block8.display();
fill("pink")
block9.display();
polygon1.display();
slingshot.display();
}
function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})	
}
function mouseReleased(){
	slingshot.fly()
}
