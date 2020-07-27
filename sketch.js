const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //{}denotes json data structor
    var ground_options ={
        isStatic: true
    }
    var options ={
        restitution: 0.8,
        friction:1.0
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground,);
    ball = Bodies.circle(200,200,3,options);
    World.add(world,ball)
    box = Bodies.rectangle(200,300,50,50,options)
    World.add(world,box);
    console.log(ground);
    console.log(ball);
    console.log(box);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("blue")
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,50,50)
    ellipseMode(CENTER);
    fill("red")
    ellipse(ball.position.x,ball.position.y,20,20);  
         
    
}