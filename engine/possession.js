export class PossessionManager {
 constructor(){
  this.owner=null;
 }

 update(players,ball){
  let closest=null;
  let distance=9999;

  players.forEach(player=>{
   const d=Math.hypot(player.x-ball.x,player.y-ball.y);
   if(d<distance){
    distance=d;
    closest=player;
   }
  });

  if(distance<20){
   this.owner=closest;
  }

  return this.owner;
 }

 getTeam(){
  return this.owner ? this.owner.team : null;
 }
}
