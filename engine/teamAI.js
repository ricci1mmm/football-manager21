export class TeamAI {
 constructor(team, tactic){
  this.team=team;
  this.tactic=tactic;
 }

 update(players, ball){
  players.forEach(player=>{
   const isAttacking=this.team==='home';
   let targetX=player.x;
   let targetY=player.y;

   if(player.role==='ST'){
    targetX+=isAttacking?40:-40;
   }

   if(player.role==='DEF'){
    targetX+=isAttacking?15:-15;
   }

   if(Math.abs(ball.x-player.x)<180){
    targetX=ball.x;
    targetY=ball.y;
   }

   player.move(targetX,targetY);
  });
 }
}
