var fixrec,movrec;

function setup() {
  createCanvas(1200,800);
  fixrec = createSprite(600, 400, 50, 80);
  fixrec.debug=true;
  fixrec.shapeColor="blue";
  movrec = createSprite(400, 200, 80, 30);
  movrec.debug=true;
  movrec.shapeColor="blue";
}

function draw() {
  background("cyan");
  movrec.x=World.mouseX;
  movrec.y=World.mouseY;
  if(movrec.x-fixrec.x < fixrec.width/2+movrec.width/2
     &&fixrec.x-movrec.x < fixrec.width/2 + movrec.width/2
     &&movrec.y-fixrec.y < fixrec.height/2+movrec.height/2
     &&fixrec.y-movrec.y < fixrec.height/2 + movrec.height/2) {
    movrec.shapeColor="red";
    fixrec.shapeColor="red";
  }
  else {
    movrec.shapeColor="blue";
    fixrec.shapeColor="blue";
  }
  drawSprites();
}