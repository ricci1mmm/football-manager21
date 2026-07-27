export class HUD {
 constructor(state){
  this.state=state;
 }

 render(ctx){
  ctx.fillStyle='white';
  ctx.font='18px Arial';
  ctx.fillText(`Minute: ${this.state.minute}`,20,25);
  ctx.fillText(`Score ${this.state.score.home}:${this.state.score.away}`,20,50);
 }
}
