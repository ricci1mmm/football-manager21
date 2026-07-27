export class BallAI {
 constructor(ball){
  this.ball=ball;
 }

 update(){
  this.ball.x+=this.ball.vx;
  this.ball.y+=this.ball.vy;

  this.ball.vx*=0.97;
  this.ball.vy*=0.97;

  if(Math.abs(this.ball.vx)<0.01)this.ball.vx=0;
  if(Math.abs(this.ball.vy)<0.01)this.ball.vy=0;
 }

 reset(){
  this.ball.x=450;
  this.ball.y=250;
  this.ball.vx=0;
  this.ball.vy=0;
 }
}
