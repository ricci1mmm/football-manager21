export class Referee {
 constructor(){
  this.cards=[];
 }

 checkFoul(tackle){
  if(!tackle.success && Math.random()<0.25){
   this.cards.push('YELLOW');
   return 'FOUL';
  }

  return 'PLAY_ON';
 }

 getCards(){
  return this.cards;
 }
}
