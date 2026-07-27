export class Scoreboard {
 constructor(state){
  this.state=state;
 }

 render(ctx){
  ctx.fillStyle='white';
  ctx.font='24px Arial';
  ctx.fillText(
   `${this.state.score.home} - ${this.state.score.away}  ${this.state.minute}'`,
   380,
   30
  );
 }
}
