const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof, ground;

function preload(){

}

function setup() {

	createCanvas(600,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, 50, 560, 40)
	ground = new Roof(width/2, height, width, 40)
	bobObject1 = new Bob(100, 400, 100, 100);
	rope1 = new Rope(bobObject1.body, {x:100, y:50});
	bobObject2 = new Bob(200, 400, 100, 100);
	rope2 = new Rope(bobObject2.body, {x:200, y:50});
	bobObject3 = new Bob(300, 400, 100, 100);
	rope3 = new Rope(bobObject3.body, {x:300, y:50});
	bobObject4 = new Bob(400, 400, 100, 100);
	rope4 = new Rope(bobObject4.body, {x:400, y:50});
	bobObject5 = new Bob(500, 400, 100, 100);
	rope5 = new Rope(bobObject5.body, {x:500, y:50});
	
}


function draw() {

	background("pink");
	Engine.update(engine);
	
	roof.display();
	ground.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}
function keyPressed(){
	if(keyCode === 37){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-0.5,y:-0.5})
	}
}


