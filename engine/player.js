export class Player {
 constructor(name, team, x, y, role='MID') {
  this.name=name;
  this.team=team;
  this.x=x;
  this.y=y;
  this.role=role;
  this.speed=1.5;
  this.stamina=100;
  this.skill=Math.random()*40+60;
 }

 move(tx,ty){
  const dx=tx-this.x;
  const dy=ty-this.y;
  const d=Math.sqrt(dx*dx+dy*dy)||1;
  this.x += dx/d*this.speed;
  this.y += dy/d*this.speed;
 }

 update(){
  this.stamina=Math.max(0,this.stamina-0.001);
 }
}
