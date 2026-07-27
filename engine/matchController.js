import {PlayerDecision} from './playerDecision.js';
import {MatchActions} from './matchActions.js';

export class MatchController {
 constructor(world){
  this.world=world;
  this.actions=new MatchActions(world);
  this.decisions=[];
 }

 initialize(){
  this.decisions=this.world.players.map(p=>({
   player:p,
   ai:new PlayerDecision(p)
  }));
 }

 update(){
  this.decisions.forEach(item=>{
   const action=item.ai.decide(
    this.world.ball,
    this.world.players.filter(p=>p.team===item.player.team),
    this.world.players.filter(p=>p.team!==item.player.team)
   );

   this.actions.execute(item.player,action);
  });
 }
}
