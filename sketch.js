const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

var engine, world;

var bgImg;
var snow1;
var snow1Img, snow2Img;

var snowflakes = [];

function preload(){
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1600, 800);

  engine = Engine.create();
  world = engine.world;

 
  snow1 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow2 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow3 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow4 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow5 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow6 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow7 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow8 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow9 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
  snow10 = new Snow(Math.round(random(10,1590)),Math.round(random(10,790)));
}

function draw() {
  background(bgImg);  
  
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  //createSnow();
 // drawSprites();
}

function mousePressed(){


  
  snowflakes.push(snow1)
 
}