export class MatchState {
 constructor(){
  this.minute=0;
  this.score={home:0,away:0};
  this.possession={home:50,away:50};
  this.shots={home:0,away:0};
  this.events=[];
 }

 addEvent(event){
  this.events.push({
   minute:this.minute,
   text:event
  });
 }

 goal(team){
  this.score[team]++;
  this.addEvent(`Goal ${team}`);
 }

 nextMinute(){
  this.minute++;
 }
}
