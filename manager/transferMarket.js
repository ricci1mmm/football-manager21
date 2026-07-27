export class TransferMarket {
 constructor(){
  this.players=[];
 }

 addPlayer(player){
  this.players.push(player);
 }

 buy(club,player){
  if(club.money>=player.value){
   club.money-=player.value;
   club.players.push(player);
   return true;
  }

  return false;
 }

 list(){
  return this.players;
 }
}
