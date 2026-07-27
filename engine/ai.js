export class PlayerAI {
 constructor(player){
  this.player=player;
  this.target=null;
 }

 decide(ball){
  const dx=ball.x-this.player.x;
  const dy=ball.y-this.player.y;
  const distance=Math.sqrt(dx*dx+dy*dy);

  if(distance<150){
   this.target={x:ball.x,y:ball.y};
  } else {
   const attack=this.player.team==='home'?1:-1;
   this.target={
    x:this.player.x+attack*50,
    y:this.player.y
   };
  }
 }

 update(){
  if(this.target){
   this.player.move(this.target.x,this.target.y);
  }
 }
}
