export class MatchSimulator {
 constructor(engine){
  this.engine=engine;
  this.minute=0;
  this.ballPossession='home';
 }

 tick(){
  this.minute+=1;

  const home=this.engine.home;
  const away=this.engine.away;

  const homePower=this.calculatePower(home);
  const awayPower=this.calculatePower(away);

  if(Math.random()<0.35){
   this.ballPossession=homePower>awayPower?'home':'away';
  }

  if(Math.random()<0.08){
   this.createAttack();
  }
 }

 calculatePower(team){
  return team.reduce((sum,p)=>sum+p.skill,0)/team.length;
 }

 createAttack(){
  const chance=Math.random();

  if(chance>0.85){
   const scoring=this.ballPossession;
   this.engine.score[scoring]++;
   this.engine.events?.goal(this.minute,scoring,'striker');
  }
 }
}
