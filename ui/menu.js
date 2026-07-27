export class ManagerMenu {
 constructor(club){
  this.club=club;
 }

 getInfo(){
  return {
   name:this.club.name,
   money:this.club.money,
   players:this.club.players.length,
   reputation:this.club.reputation
  };
 }
}
