export class AttackBuilder {
 constructor(){
  this.attackers=[];
 }

 start(team){
  this.attackers=team.filter(p=>
   p.role==='ST' || p.role==='RW' || p.role==='LW'
  );
 }

 calculateDanger(){
  if(this.attackers.length===0)return 0;

  return Math.min(100,
   this.attackers.reduce((sum,p)=>sum+p.skill,0)
   / this.attackers.length
  );
 }
}
