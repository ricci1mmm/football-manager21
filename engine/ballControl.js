export class BallControl {
 constructor(ball){
  this.ball=ball;
  this.owner=null;
 }

 take(player){
  this.owner=player;
  this.ball.vx=0;
  this.ball.vy=0;
 }

 pass(target){
  if(!this.owner)return false;
  const dx=target.x-this.owner.x;
  const dy=target.y-this.owner.y;
  const distance=Math.sqrt(dx*dx+dy*dy)||1;

  this.ball.x=this.owner.x;
  this.ball.y=this.owner.y;
  this.ball.vx=dx/distance*6;
  this.ball.vy=dy/distance*6;
  this.owner=null;
  return true;
 }

 update(){
  if(this.owner){
   this.ball.x=this.owner.x;
   this.ball.y=this.owner.y;
  }
 }
}
