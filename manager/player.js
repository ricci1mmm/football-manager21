export class FootballPlayer {
 constructor(name,position){
  this.name=name;
  this.position=position;
  this.age=18+Math.floor(Math.random()*15);
  this.rating=50+Math.floor(Math.random()*50);
  this.value=this.rating*10000;
  this.form=100;
 }

 train(){
  this.rating=Math.min(99,this.rating+0.1);
 }
}
