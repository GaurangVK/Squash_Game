             var ball,ball_img,paddle,paddle_img;


function preload() {
 ball_img=loadImage("ball.png");
 paddle_img=loadImage("paddle.png");
}


function setup() { 
  createCanvas(400, 400); 
  background("white");
  paddle=createSprite(290,200,10,10);
  paddle.addImage("paddle",paddle_img);
  
  ball=createSprite(50,200,10,10);
  ball.addImage("ball",ball_img);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,155,0);
  
  /* create Edge Sprites here */
    edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
  
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,explosion);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
 //ball.velocityY=random(-15,15);
  
  
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[0]);
  paddle.collide(edges[1]);
  
  if(keyDown(UP_ARROW)){
  paddle.y=paddle.y-20;
   
  }
     /* what should happen when you press the UP Arrow Key */
  
  
  if(keyDown(DOWN_ARROW)){
  paddle.y=paddle.y+20;
   
  }
    /* what should happen when you press the DOWN Arrow Key */
  
   
  drawSprites();
}  



  
  
  
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
 
  
 //explosion(); 
  


function explosion()
{
  ball.velocityY=random(-10,10);
}
                                                                                                                         