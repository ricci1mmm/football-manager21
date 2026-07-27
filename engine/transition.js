export class TransitionEngine {
 constructor(){
  this.phase='DEFENCE';
 }

 recoverBall(team){
  this.phase='COUNTER';
  return {
   team,
   speed:'FAST',
   instruction:'ATTACK_SPACE'
  };
 }

 finishAttack(){
  this.phase='DEFENCE';
 }
}
