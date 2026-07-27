export class SubstitutionSystem {
 constructor(){
  this.changes=[];
 }

 make(team,outPlayer,inPlayer,minute){
  this.changes.push({
   team,
   out:outPlayer,
   in:inPlayer,
   minute
  });

  return true;
 }

 get(){
  return this.changes;
 }
}
