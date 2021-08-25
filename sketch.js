var mazewalla,mazewallb,mazewallc,mazewalld,mazewall1,mazewall2,mazewall3,mazewall4,mazewall5,mazewall6,mazewall7
var mazewall8,mazewall9,mazewall10
var mazewall11,mazewall12,mazewall13,mazewall14,mazewall15,mazewall16,mazewall17,mazewall18,mazewall19,mazewall20
var mazewall21,mazewall22,mazewall23,mazewall24,mazewall25,mazewall26,mazewall27,mazewall28,mazewall29,mazewall30
var mazewall31,mazewall32,mazewall33,mazewall35,mazewall36,mazewall37,mazewall34
var bullet,bullet1,bullet2,bullet3
var virus1,virus2,virus3,virus4,virus5
function preload(){
  houseImg = loadImage("house1.png");
  playerrightImg = loadImage("playerRight.png");
  playerleftImg = loadImage("playerLeft.png");
  playerupImg = loadImage("playerUp.png")
  playerdownImg = loadImage("playerDown.png")
virusImg = loadImage("virus1.png");
playerImg = loadImage("playerRight.png");
backgroundImg = loadImage("background5.jpg")
exitImg = loadImage("exit.png")

}


function setup(){
 createCanvas(400,400);

player = createSprite(80,370,10,10);
player.addImage(playerImg)
player.scale = 0.09

bullet = createSprite(25,370,10,10);
  bullet.shapeColor = "black"

 mazewalla = createSprite(0, 200, 10, 400);
mazewalla.shapeColor = "black";

mazewallb = createSprite(200, 400, 400, 10);
mazewallb.shapeColor = "black";

mazewallc = createSprite(400, 200, 10, 400);
mazewallc.shapeColor = "black";

mazewalld = createSprite(200, 0, 400, 10);
mazewalld.shapeColor = "black";

mazewall1 = createSprite(0, 375, 10, 50);
mazewall1.shapeColor = "black";

mazewall2 = createSprite(25, 399, 50, 10);
mazewall2.shapeColor = "black";

mazewall3 = createSprite(25, 350, 50, 5);
mazewall3.shapeColor = "black";

mazewall4 = createSprite(100, 350, 5, 100);
mazewall4.shapeColor = "black";

mazewall5 = createSprite(100, 300, 100, 5);
mazewall5.shapeColor = "black";

mazewall6 = createSprite(97, 200, 100, 5);
mazewall6.shapeColor = "black";

mazewall7 = createSprite(50, 225, 5, 50);
mazewall7.shapeColor = "black";

mazewall8 = createSprite(150, 250, 100, 5);
mazewall8.shapeColor = "black";

mazewall9 = createSprite(25, 150, 50, 5);
mazewall9.shapeColor = "black";

mazewall10 = createSprite(100, 50, 106, 5);
mazewall10.shapeColor = "black";

mazewall11 = createSprite(28, 250, 50, 5);
mazewall11.shapeColor = "black";

mazewall5 = createSprite(200, 275, 5, 155);
mazewall5.shapeColor = "black";

mazewall11 = createSprite(175, 350, 50, 5);
mazewall11.shapeColor = "black";

mazewall12 = createSprite(100, 175, 5, 50);
mazewall12.shapeColor = "black";

mazewall13 = createSprite(250, 375, 5, 50);
mazewall13.shapeColor = "black";

 mazewall14 = createSprite(225, 300, 50, 5);
mazewall14.shapeColor = "black";

 mazewall15 = createSprite(273, 350, 52, 5);
mazewall15.shapeColor = "black";

 mazewall16 = createSprite(300, 325, 5, 55);
mazewall16.shapeColor = "black";

 mazewall17 = createSprite(50, 75, 5, 50);
mazewall17.shapeColor = "black";

 mazewall18 = createSprite(125, 100, 50, 5);
mazewall18.shapeColor = "black";

 mazewall20 = createSprite(150, 125, 5, 55);
mazewall20.shapeColor = "black";

 mazewall19 = createSprite(225, 150, 150, 5);
mazewall19.shapeColor = "black";

 mazewall21 = createSprite(300, 100, 100, 5);
mazewall21.shapeColor = "black";

 mazewall22 = createSprite(250, 200, 5, 105);
mazewall22.shapeColor = "black";

 mazewall23 = createSprite(275, 250, 50, 5);
mazewall23.shapeColor = "black";

 mazewall24 = createSprite(375, 300, 55, 5);
mazewall24.shapeColor = "black";

 mazewall25 = createSprite(325, 350, 52, 5);
mazewall25.shapeColor = "black";

 mazewall26 = createSprite(350, 200, 100, 5);
mazewall26.shapeColor = "black";

 mazewall27 = createSprite(375, 150, 50, 5);
mazewall27.shapeColor = "black";

 mazewall28 = createSprite(350, 225, 5, 50);
mazewall28.shapeColor = "black";

 mazewall29 = createSprite(150, 75, 5, 50);
mazewall29.shapeColor = "black";

 mazewall30 = createSprite(225, 50, 50, 5);
mazewall30.shapeColor = "black";

 mazewall31 = createSprite(350, 125, 5, 55);
mazewall31.shapeColor = "black";

 mazewall32 = createSprite(350, 25, 5, 50);
mazewall32.shapeColor = "black";

 mazewall33 = createSprite(250, 25, 5, 55);
mazewall33.shapeColor = "black";

 mazewall34 = createSprite(225, 100, 50, 5);
mazewall34.shapeColor = "black";

 mazewall35 = createSprite(225, 200, 50, 5);
mazewall35.shapeColor = "black";

 mazewall37 = createSprite(100, 25, 5, 50);
mazewall37.shapeColor = "black";

 mazewall36 = createSprite(300, 75, 5, 50);
mazewall36.shapeColor = "black";

safehouse1 = createSprite(25,375,10,10);
safehouse1.addImage(houseImg);
safehouse1.scale = 0.1

safehouse2 = createSprite(75,25,10,10);
safehouse2.addImage(houseImg);
safehouse2.scale = 0.1

safehouse3 = createSprite(280,375,10,10);
safehouse3.addImage(houseImg);
safehouse3.scale = 0.1

virus1 = createSprite(320,275,10,10)
virus1.addImage(virusImg)
virus1.scale = 0.2

virus2 = createSprite(75,75,10,10)
virus2.addImage(virusImg)
virus2.scale = 0.2

virus3 = createSprite(random(150,180),180,10,10)
virus3.addImage(virusImg)
virus3.scale = 0.2

virus5 = createSprite(175,70,10,10)
virus5.addImage(virusImg)
virus5.scale = 0.2

virus4 = createSprite(random(300,375),180,10,10)
virus4.addImage(virusImg)
virus4.scale = 0.2

bullet1 = createSprite(25,370,10,10);
  bullet1.shapeColor = "black"

  bullet2 = createSprite(25,370,10,10);
  bullet2.shapeColor = "black"

  bullet3 = createSprite(25,370,10,10);
  bullet3.shapeColor = "black"

  exit = createSprite(375,25,10,10)
  exit.addImage(exitImg)
  exit.scale = 0.09
}
function draw() {
background(backgroundImg)

if (keyDown (RIGHT_ARROW)){
  player.x=player.x+2
  player.addImage(playerrightImg);
  player.scale = 0.09
}

if(keyDown (LEFT_ARROW)){
  player.x=player.x-2
  player.addImage(playerleftImg);
  player.scale = 0.09
}
if(keyDown (UP_ARROW)){
  player.y=player.y-2
  player.addImage(playerupImg);
  player.scale = 0.09
}

if(keyDown (DOWN_ARROW)){
  player.y=player.y+2
  player.addImage(playerdownImg);
  player.scale = 0.09
}

if(keyWentDown ("s")){
  
  bullet.velocityY = 5
  bullet.y = player.y+5
  bullet.x = player.x
  
  }
  
  if(keyWentDown ("w")){
  
    bullet1.velocityY = -5
    bullet1.y = player.y-5
    bullet1.x = player.x
  
  }
  
  if(keyWentDown ("a")){
  
    bullet2.velocityX = -5
    bullet2.x = player.x-5
    bullet2.y = player.y
  }
  
  if(keyWentDown("d")){
 
  bullet3.velocityX = 5
  bullet3.x = player.x+5
  bullet3.y = player.y
  }

if(player.isTouching(mazewall1)||
player.isTouching(mazewall2)||
player.isTouching(mazewall3)||
player.isTouching(mazewall4)||player.isTouching(mazewall5)||player.isTouching(mazewall6)||
player.isTouching(mazewall7)||player.isTouching(mazewall8)||player.isTouching(mazewall9)||
player.isTouching(mazewall10)||player.isTouching(mazewall11)||player.isTouching(mazewall12)||
player.isTouching(mazewall13)||player.isTouching(mazewall14)||player.isTouching(mazewall15)||
player.isTouching(mazewall16)||player.isTouching(mazewall17)||player.isTouching(mazewall18)||
player.isTouching(mazewall19)||player.isTouching(mazewall20)||player.isTouching(mazewall21)||
player.isTouching(mazewall23)||player.isTouching(mazewall24)||player.isTouching(mazewall22)||
player.isTouching(mazewall25)||player.isTouching(mazewall26)||player.isTouching(mazewall27)||
player.isTouching(mazewall28)||player.isTouching(mazewall29)||player.isTouching(mazewall30)||
player.isTouching(mazewall31)||player.isTouching(mazewall32)||player.isTouching(mazewall33)||
player.isTouching(mazewall34)||player.isTouching(mazewall35)||player.isTouching(mazewall36)||
player.isTouching(mazewall37)
){
  player.x = 50
  player.y = 370
}
//bullet
if(bullet.isTouching(virus1)){
  virus1.destroy()
  
}
if(bullet.isTouching(virus2)){
  virus2.destroy()
  
}
if(bullet.isTouching(virus3)){
  virus3.destroy()
  
}
if(bullet.isTouching(virus4)){
  virus4.destroy()
  
}
if(bullet.isTouching(virus5)){
  virus5.destroy()
  
}
//bullet1
if(bullet1.isTouching(virus1)){
  virus1.destroy()
}
if(bullet1.isTouching(virus2)){
  virus2.destroy()
 
}
if(bullet1.isTouching(virus3)){
  virus3.destroy()
  
}
if(bullet1.isTouching(virus4)){
  virus4.destroy()
 
}
if(bullet1.isTouching(virus5)){
  virus5.destroy()
  
}
//bullet2
if(bullet2.isTouching(virus1)){
  virus1.destroy()
  
}
if(bullet2.isTouching(virus2)){
  virus2.destroy()
  
}
if(bullet2.isTouching(virus3)){
  virus3.destroy()
  
}
if(bullet2.isTouching(virus4)){
  virus4.destroy()
 
}
if(bullet2.isTouching(virus5)){
  virus5.destroy()
}

//bullet3
if(bullet3.isTouching(virus1)){
  virus1.destroy()
  
  
}
if(bullet3.isTouching(virus2)){
  virus2.destroy()
  
}
if(bullet3.isTouching(virus3)){
  virus3.destroy()
  
}
if(bullet3.isTouching(virus4)){
  virus4.destroy()
  
}
if(bullet3.isTouching(virus5)){
  virus5.destroy()
  
}

if (player.isTouching(exit)){
  background("white")
  fill("black")
  textSize(30)
  text("YOU WON THE GAME",0,200)
  
}

  drawSprites();
}


