export function dribble(player, opponent){
 const distance=Math.hypot(
  player.x-opponent.x,
  player.y-opponent.y
 );

 const control=player.skill/100;
 const pressure=Math.max(0,1-distance/120);
 const success=Math.random() < control*(1-pressure);

 if(success){
  player.x += player.team==='home' ? 8 : -8;
 }

 return success;
}
