const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  bg = loadImage("b1.jpeg");
}

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  

  
}

function draw() {
  background(bg);
  Engine.update(engine);

 

}
