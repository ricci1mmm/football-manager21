export class MatchEvents {
 constructor(){
  this.events=[];
 }

 add(minute,type,player){
  this.events.push({minute,type,player});
 }

 goal(minute,team,player){
  this.add(minute,'GOAL '+team,player);
 }

 card(minute,player){
  this.add(minute,'YELLOW_CARD',player);
 }

 get(){
  return this.events;
 }
}
