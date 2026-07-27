export function intercept(defender,passTarget,ball){
 const distance=Math.sqrt(
  Math.pow(defender.x-ball.x,2)+
  Math.pow(defender.y-ball.y,2)
 );

 const reaction=defender.skill/100;

 return distance<40 && Math.random()<reaction;
}
