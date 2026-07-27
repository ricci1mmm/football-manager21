export class Season {
 constructor(){
  this.year=2026;
  this.matches=[];
  this.table={};
 }

 addMatch(home,away,result){
  this.matches.push({home,away,result});
 }

 updateTable(team,points){
  if(!this.table[team]){
   this.table[team]={points:0};
  }
  this.table[team].points+=points;
 }
}
