const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, block1;
var polygonImg;

function preload()
{
	this.image = loadImage("sprites/polygon.png");
}


function setup()
{
    createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ground1= new Ground (500, 500,250,10)
block1= new Box (450,470,30,40);
block2= new Box (485,470,30,40);
block3= new Box (520,470,30,40);
block4= new Box (555,470,30,40);
block5= new Box (590,470,30,40);
block6= new Box (415,470,30,40);
block7= new Box (450,425,30,40);
block8= new Box (485,425,30,40);
block9= new Box (520,425,30,40);
block10= new Box (555,425,30,40);
block11= new Box (485,380,30,40);
block12= new Box (520,380,30,40);
block13= new Box (507,335,30,40);

ground2= new Ground (300,250,200,10);
b1= new Box (250,200,30,40);
b2= new Box (285,200,30,40)
b3= new Box (320,200,30,40)
b4= new Box (355,200,30,40)
b5= new Box (320,155,30,40)
b6= new Box (285,155,30,40)
b7= new Box (300,110,30,40)

polygon= Bodies.circle(50,200,20);
World.add (world, polygon)

slingshot= new Slingshot (this.polygon, {x:100, y:200})
 
polygon= new polygon (120,120,20,10)

}

function draw()
{

background("black");
Engine.update(engine);
rectMode(CENTER);

//background(0);
ground1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
ground2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
polygon.display();
slingshot.display();



}