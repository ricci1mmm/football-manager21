export function calculatePass(player,target){
 const distance=Math.sqrt(
  Math.pow(target.x-player.x,2)+
  Math.pow(target.y-player.y,2)
 );

 const accuracy=Math.max(0.2,player.skill/100-distance/1000);

 return {
  distance,
  accuracy,
  success:Math.random()<accuracy
 };
}
