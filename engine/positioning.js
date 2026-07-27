export class PositioningEngine {
 constructor(width=900,height=500){
  this.width=width;
  this.height=height;
 }

 getPosition(role,team){
  const home=team==='home';
  const xBase=home?150:750;

  const positions={
   GK:{x:xBase,y:250},
   RB:{x:xBase+(home?40:-40),y:100},
   CB:{x:xBase+(home?60:-60),y:220},
   LB:{x:xBase+(home?40:-40),y:400},
   CM:{x:xBase+(home?120:-120),y:250},
   RM:{x:xBase+(home?150:-150),y:120},
   LM:{x:xBase+(home?150:-150),y:380},
   ST:{x:xBase+(home?220:-220),y:250}
  };

  return positions[role] || {x:xBase,y:250};
 }
}
