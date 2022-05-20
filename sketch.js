var airhockeytable;
var greenmalletimg,greenmallet;

function preload(){
  airhockeytable = loadImage("images/air-hockey-table.jpg");
  greenmalletimg=loadImage("images/greenmallet.png")
}
function setup() {
  createCanvas(1000, 600);
  greenmallet=createSprite(300,300,20,20);
  greenmallet.addImage(greenmalletimg)
  greenmallet.scale=0.2
}

function draw() {
  background(airhockeytable);
  
  drawSprites();
}