export class TacticalAI {
 constructor(team, style='BALANCED'){
  this.team=team;
  this.style=style;
 }

 setStyle(style){
  this.style=style;
 }

 getInstructions(){
  const styles={
   ATTACKING:{
    pressing:90,
    defensiveLine:80,
    risk:85,
    passing:'DIRECT'
   },
   DEFENSIVE:{
    pressing:30,
    defensiveLine:25,
    risk:20,
    passing:'COUNTER'
   },
   POSSESSION:{
    pressing:60,
    defensiveLine:55,
    risk:45,
    passing:'SHORT'
   },
   BALANCED:{
    pressing:50,
    defensiveLine:50,
    risk:50,
    passing:'MIXED'
   }
  };

  return styles[this.style] || styles.BALANCED;
 }

 update(gameState){
  if(!gameState || !gameState.score) return;

  if(this.style==='BALANCED'){
   if(gameState.score.home < gameState.score.away && this.team==='home'){
    this.style='ATTACKING';
   }
  }
 }
}
