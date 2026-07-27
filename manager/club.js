export class Club {
 constructor(name){
  this.name=name;
  this.money=10000000;
  this.players=[];
  this.reputation=50;
 }

 buyPlayer(player,cost){
  if(this.money>=cost){
   this.money-=cost;
   this.players.push(player);
   return true;
  }
  return false;
 }

 changeReputation(value){
  this.reputation=Math.max(0,Math.min(100,this.reputation+value));
 }
}
