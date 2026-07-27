export class Commentary {
 constructor(){
  this.lines=[];
 }

 add(text){
  this.lines.unshift(text);
  if(this.lines.length>20)this.lines.pop();
 }

 pass(player,target){
  this.add(`${player.name} passes to ${target.name}`);
 }

 shot(player){
  this.add(`${player.name} shoots!`);
 }

 goal(team,player){
  this.add(`GOAL ${team}: ${player}`);
 }

 get(){
  return this.lines;
 }
}
