import {GameWorld} from './gameWorld.js';
import {MatchState} from './matchState.js';
import {MatchEngine} from './matchEngine.js';
import {MatchController} from './matchController.js';
import {PossessionManager} from './possession.js';
import {CoachAI} from './coachAI.js';
import {StaminaSystem} from './stamina.js';
import {Referee} from './referee.js';
import {BallAI} from './ballAI.js';
import {PositioningEngine} from './positioning.js';
import {createPositions} from './formation.js';

export class GameMatch {
 constructor(options={}){
  this.engine=options.engine || new MatchEngine();
  this.world=options.world || new GameWorld();
  this.state=options.state || new MatchState();

  this.players=[...(this.engine.home || []), ...(this.engine.away || [])];

  this.world.addPlayers(this.players);
  this.world.setBall(this.engine.ball);

  this.controller=new MatchController(this.world);
  this.possession=new PossessionManager();
  this.coach={home:new CoachAI(this.engine.home),away:new CoachAI(this.engine.away)};
  this.stamina=new StaminaSystem();
  this.referee=new Referee();
  this.ballAI=new BallAI(this.world.ball);
  this.positioning=new PositioningEngine();

  this.setupFormation(options.formation || '4-4-2');
  this.controller.initialize();
  this.running=false;
 }

 setupFormation(type){
  const roles=createPositions(type);
  this.players.forEach((player,index)=>{
   const role=roles[index%roles.length];
   player.role=role;
   const pos=this.positioning.getPosition(role,player.team);
   player.x=pos.x;
   player.y=pos.y;
  });
 }

 frame(delta=1){
  if(!this.running) return this.state;
  this.updateAI(delta);
  this.updateStamina();
  this.updatePlayers(delta);
  this.updateBall(delta);
  this.checkPossession();
  this.updateCoaches();
  this.updateMatchTime();
  return this.state;
 }

 updatePlayers(){this.world.update();}
 updateAI(){this.controller.update();}
 updateBall(){if(this.ballAI)this.ballAI.update();}
 updateStamina(){this.players.forEach(p=>this.stamina.update(p));}
 updateCoaches(){this.coach.home.analyze(this.state);this.coach.away.analyze(this.state);}

 checkPossession(){
  const owner=this.possession.update(this.world.players,this.world.ball);
  if(owner){
   this.state.possession={home:owner.team==='home'?100:0,away:owner.team==='away'?100:0};
  }
 }

 updateMatchTime(){if(this.state.minute!==this.engine.minute)this.state.minute=this.engine.minute;}
 start(){this.running=true;}
 stop(){this.running=false;}
 getScore(){return this.state.score;}
}
