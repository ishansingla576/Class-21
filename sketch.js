var a;
var b;
var c;
var d;
function setup() {
  createCanvas(displayWidth,displayHeight);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(500,200,50,50);
  c = createSprite(200,200,50,50);
  d = createSprite(300,200,50,50);
  a.shapeColor="green";
  b.shapeColor="green";
  c.shapeColor="green";
  d.shapeColor="green";
  //a.debug=true;
  //b.debug=true;
}

function draw() {
  background("black");  

  a.x=mouseX;
  a.y=mouseY;
  
  drawSprites();
  if(isTouching(a,b)===true){

   a.shapeColor="red";
   b.shapeColor="Yellow";   
  }
  else{

    a.shapeColor="green";
    b.shapeColor="green";
  }
  if(isTouching(a,c)===true){
    a.shapeColor="red";
    c.shapeColor="yellow"
  }
  else{

    a.shapeColor="green";
    c.shapeColor="green";
  }
  if(isTouching(a,d)===true){
    a.shapeColor="red";
    d.shapeColor="yellow"
  }
else{

  a.shapeColor="green";
  d.shapeColor="green";
}
}

function isTouching(o1,o2){
  
  if(o1.x-o2.x<o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2 && o1.y-o2.y<o1.height/2+o2.height/2 && o2.y-o1.y<o1.height/2+o2.height/2){

      return true;
   }
   else{
   return false;
   }
}
