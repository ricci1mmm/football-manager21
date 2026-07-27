export class Goalkeeper {
 constructor(player){
  this.player=player;
  this.reaction=0.7;
 }

 defend(ball){
  const goalLine=this.player.team==='home'?80:820;
  const targetY=Math.max(50,Math.min(450,ball.y));

  if(Math.abs(this.player.x-goalLine)>2){
   this.player.x+=(goalLine-this.player.x)*0.05;
  }

  this.player.y+=(targetY-this.player.y)*0.05;

  const dx=ball.x-this.player.x;
  const dy=ball.y-this.player.y;
  const distance=Math.sqrt(dx*dx+dy*dy);

  return distance<25 && Math.random()<this.reaction;
 }
}
