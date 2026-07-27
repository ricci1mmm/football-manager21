export class Ball {
 constructor(){
  this.x=450;
  this.y=250;
  this.vx=0;
  this.vy=0;
 }

 kick(power,angle){
  this.vx=Math.cos(angle)*power;
  this.vy=Math.sin(angle)*power;
 }

 update(){
  this.x+=this.vx;
  this.y+=this.vy;
  this.vx*=0.98;
  this.vy*=0.98;
 }
}
