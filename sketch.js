const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine
var world
var box
var ground

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  box=Bodies.rectangle(100,100,30,30)
  World.add(world,box)
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,10,option)
  World.add(world,ground)
}

function draw() {
  background("green");
  Engine.update(engine) 
 rectMode(CENTER)
 rect(200,200,50,50)
 rect(box.position.x,box.position.y,30,20)
 rect(ground.position.x,ground.position.y,400,10)
} 