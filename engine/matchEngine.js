import {Player} from './player.js';
import {Ball} from './ball.js';

export class MatchEngine {
 constructor(){
  this.minute=0;
  this.score={home:0,away:0};
  this.ball=new Ball();
  this.home=this.createTeam('home');
  this.away=this.createTeam('away');
 }

 createTeam(side){
  const players=[];
  for(let i=0;i<11;i++){
   const x=side==='home'?150:750;
   players.push(new Player(side+'_'+i,side,x,50+i*35,i===0?'GK':'FIELD'));
  }
  return players;
 }

 simulateMinute(){
  this.minute++;
  const attack=Math.random();
  if(attack>0.97){
   if(Math.random()>0.5)this.score.home++;
   else this.score.away++;
  }
 }
}
