export function shoot(player,ball,targetX,targetY){
 const dx=targetX-player.x;
 const dy=targetY-player.y;
 const distance=Math.sqrt(dx*dx+dy*dy)||1;
 const power=Math.min(12,player.skill/10);

 ball.x=player.x;
 ball.y=player.y;
 ball.vx=dx/distance*power;
 ball.vy=dy/distance*power;

 return {
  power,
  accuracy:player.skill
 };
}
