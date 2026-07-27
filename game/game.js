import {MatchState} from '../engine/matchState.js';
import {MatchEngine} from '../engine/matchEngine.js';
import {Scoreboard} from '../ui/scoreboard.js';

export class Game {
 constructor(canvas){
  this.canvas=canvas;
  this.ctx=canvas.getContext('2d');
  this.state=new MatchState();
  this.match=new MatchEngine();
  this.scoreboard=new Scoreboard(this.state);
 }

 update(){
  this.state.nextMinute();
 }

 render(){
  this.drawField();
  this.drawPlayers();
  this.scoreboard.render(this.ctx);
 }

 drawField(){
  this.ctx.strokeStyle='white';
  this.ctx.strokeRect(20,50,860,400);
  this.ctx.beginPath();
  this.ctx.moveTo(450,50);
  this.ctx.lineTo(450,450);
  this.ctx.stroke();
 }

 drawPlayers(){
  this.match.home.concat(this.match.away).forEach(p=>{
   this.ctx.fillStyle=p.team==='home'?'blue':'red';
   this.ctx.beginPath();
   this.ctx.arc(p.x,p.y,10,0,Math.PI*2);
   this.ctx.fill();
  });
 }
}
