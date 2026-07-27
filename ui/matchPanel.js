export class MatchPanel {
 constructor(state){
  this.state=state;
 }

 render(ctx){
  ctx.fillStyle='white';
  ctx.font='16px Arial';

  const last=this.state.events.slice(0,5);

  last.forEach((event,index)=>{
   ctx.fillText(
    `${event.minute}' ${event.text}`,
    650,
    80+index*22
   );
  });
 }
}
