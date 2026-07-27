export class PlayerMovement {
 constructor(player){
  this.player=player;
  this.destination={x:player.x,y:player.y};
 }

 setPosition(x,y){
  this.destination={x,y};
 }

 update(){
  const p=this.player;
  const dx=this.destination.x-p.x;
  const dy=this.destination.y-p.y;
  const distance=Math.sqrt(dx*dx+dy*dy);

  if(distance>1){
   p.x += dx/distance*p.speed;
   p.y += dy/distance*p.speed;
  }
 }
}
