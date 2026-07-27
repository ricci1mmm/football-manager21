import {GameWorld} from './gameWorld.js';
import {MatchState} from './matchState.js';
import {MatchEngine} from './matchEngine.js';
import {MatchController} from './matchController.js';
import {PossessionManager} from './possession.js';

export class GameMatch {
 constructor(options={}){
  this.engine = options.engine || new MatchEngine();
  this.world = options.world || new GameWorld();
  this.state = options.state || new MatchState();

  this.players = [
   ...(this.engine.home || []),
   ...(this.engine.away || [])
  ];

  this.world.addPlayers(this.players);
  this.world.setBall(this.engine.ball);

  this.controller = new MatchController(this.world);
  this.possession = new PossessionManager();

  this.controller.initialize();

  this.running = false;
 }

 frame(delta=1){
  if(!this.running) return this.state;

  this.updateAI(delta);
  this.updatePlayers(delta);
  this.updateBall(delta);
  this.checkPossession();
  this.updateMatchTime();

  return this.state;
 }

 updatePlayers(){
  this.world.update();
 }

 updateAI(){
  this.controller.update();
 }

 updateBall(){
  if(this.world.ball && this.world.ball.update){
   this.world.ball.update();
  }
 }

 checkPossession(){
  const owner=this.possession.update(
   this.world.players,
   this.world.ball
  );

  if(owner){
   this.state.possession={
    home: owner.team==='home'?100:0,
    away: owner.team==='away'?100:0
   };
  }
 }

 updateMatchTime(){
  if(this.state.minute !== this.engine.minute){
   this.state.minute=this.engine.minute;
  }
 }

 start(){
  this.running=true;
 }

 stop(){
  this.running=false;
 }

 getScore(){
  return this.state.score;
 }
}
