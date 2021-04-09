const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monster


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    monster = new Monster(600,300,80,20)
}

function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    monster.display();
        
}

