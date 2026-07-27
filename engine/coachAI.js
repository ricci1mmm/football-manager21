export class CoachAI {
 constructor(team){
  this.team=team;
  this.mood='BALANCED';
 }

 analyze(state){
  const score=state.score;

  if(score.home<score.away){
   this.mood='ATTACKING';
  }

  if(score.home>score.away){
   this.mood='DEFENSIVE';
  }

  return this.mood;
 }

 makeChange(minute){
  if(minute>60){
   return {
    type:'SUBSTITUTION',
    reason:'FATIGUE'
   };
  }

  return null;
 }
}
