export class MatchLoop {
 constructor(engine){
  this.engine=engine;
  this.running=false;
  this.timer=null;
 }

 start(){
  if(this.running)return;
  this.running=true;

  this.timer=setInterval(()=>{
   if(this.engine.minute>=90){
    this.stop();
    return;
   }

   this.engine.minute++;
   this.engine.simulateMinute();
  },1000);
 }

 stop(){
  this.running=false;
  clearInterval(this.timer);
 }
}
