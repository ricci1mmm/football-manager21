export class PressingSystem {
 constructor(level=50){
  this.level=level;
 }

 shouldPress(player,ball){
  const distance=Math.hypot(
   player.x-ball.x,
   player.y-ball.y
  );

  const chance=this.level/100;

  return distance<180 && Math.random()<chance;
 }

 setLevel(value){
  this.level=Math.max(0,Math.min(100,value));
 }
}
