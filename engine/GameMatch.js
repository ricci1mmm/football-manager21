import {GameWorld} from './gameWorld.js';
import {MatchState} from './matchState.js';
import {MatchEngine} from './matchEngine.js';

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

  this.running = false;
  this.lastUpdate = 0;
 }

 frame(delta=1){
  if(!this.running) return;

  this.updatePlayers(delta);
  this.updateAI(delta);
  this.updateBall(delta);
  this.checkPossession();
  this.updateMatchTime();

  return this.state;
 }

 updatePlayers(){
  this.world.update();
 }

 updateAI(){
  // Tactical systems are connected here as they are added.
 }

 updateBall(){
  if(this.world.ball && this.world.ball.update){
   this.world.ball.update();
  }
 }

 checkPossession(){
  // Possession manager integration point.
 }

 updateMatchTime(){
  if(this.state.minute !== this.engine.minute){
   this.state.minute = this.engine.minute;
  }
 }

 start(){
  this.running = true;
 }

 stop(){
  this.running = false;
 }

 getScore(){
  return this.state.score;
 }
}
