export function resolveCollision(playerA,playerB){
 const dx=playerB.x-playerA.x;
 const dy=playerB.y-playerA.y;
 const distance=Math.sqrt(dx*dx+dy*dy);

 if(distance<18){
  const push=(18-distance)/2;
  playerA.x-=dx/distance*push;
  playerA.y-=dy/distance*push;
  playerB.x+=dx/distance*push;
  playerB.y+=dy/distance*push;
  return true;
 }

 return false;
}
