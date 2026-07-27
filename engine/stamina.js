export class StaminaSystem {
 update(player, intensity=1){
  player.stamina=Math.max(
   0,
   player.stamina-intensity*0.02
  );

  if(player.stamina<30){
   player.speed*=0.999;
  }
 }

 recover(player){
  player.stamina=Math.min(100,player.stamina+0.1);
 }
}
