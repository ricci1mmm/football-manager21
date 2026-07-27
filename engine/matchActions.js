export class MatchActions {
 constructor(world){
  this.world=world;
 }

 execute(player,action){
  switch(action.action){
   case 'PASS':
    return this.pass(player,action.target);
   case 'SHOOT':
    return this.shoot(player);
   case 'PRESS':
    return this.press(player,action.target);
   default:
    return false;
  }
 }

 pass(player,target){
  this.world.ball.x=player.x;
  this.world.ball.y=player.y;
  this.world.ball.vx=(target.x-player.x)/20;
  this.world.ball.vy=(target.y-player.y)/20;
  return true;
 }

 shoot(player){
  this.world.ball.x=player.x;
  this.world.ball.y=player.y;
  this.world.ball.vx=player.team==='home'?10:-10;
  this.world.ball.vy=(Math.random()-0.5)*5;
  return true;
 }

 press(player,target){
  player.move(target.x,target.y);
  return true;
 }
}
