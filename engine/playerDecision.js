export class PlayerDecision {
 constructor(player){
  this.player=player;
 }

 decide(ball, teammates, opponents){
  const distance=Math.hypot(
   ball.x-this.player.x,
   ball.y-this.player.y
  );

  if(distance<25){
   return this.chooseAction(teammates);
  }

  if(distance<180){
   return {action:'PRESS',target:ball};
  }

  return {action:'POSITION'};
 }

 chooseAction(teammates){
  const target=teammates[Math.floor(Math.random()*teammates.length)];

  if(this.player.role==='ST'){
   return {action:'SHOOT'};
  }

  return {action:'PASS',target};
 }
}
