var bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse1.png");
    catimg2 = loadAnimation("cat2.png","cat3.png");
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png");
    catimg3 = loadAnimation("cat4.png");
    mouseimg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
     cat = createSprite(360,290,20,20);
     cat.addAnimation("catStanding", catimg1);
     mouse = createSprite(100,300,20,20);
     mouse.addAnimation("mouseStanding", mouseimg2);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.VelocityX = 0; 
     cat.addAnimation("catHappy",catimg3);
     cat.changeAnimation("catHappy"); 
     mouse.addAnimation("mouseHappy",mouseimg3);
     mouse.changeAnimation("mouseHappy");    
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === RIGHT_ARROW){
       mouse.addAnimation("mouseTeasing", mouseimg2);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay = 25;
   }

   if(keyCode === LEFT_ARROW){
       cat.addAnimation("catRunning", catimg2);
       cat.changeAnimation("catRunning");
       cat.VelocityX = 2;
       
   }
}
