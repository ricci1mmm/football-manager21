export class GameWorld {
 constructor(){
  this.players=[];
  this.ball=null;
  this.time=0;
 }

 addPlayers(players){
  this.players.push(...players);
 }

 setBall(ball){
  this.ball=ball;
 }

 update(){
  this.time+=1;

  this.players.forEach(player=>{
   if(player.update) player.update();
  });

  if(this.ball && this.ball.update){
   this.ball.update();
  }
 }
}
