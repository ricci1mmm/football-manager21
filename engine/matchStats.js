export class MatchStats {
 constructor(){
  this.data={
   home:{shots:0,passes:0,possession:0},
   away:{shots:0,passes:0,possession:0}
  };
 }

 addShot(team){
  this.data[team].shots++;
 }

 addPass(team){
  this.data[team].passes++;
 }

 addPossession(team){
  this.data[team].possession++;
 }

 get(){
  return this.data;
 }
}
