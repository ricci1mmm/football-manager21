export function calculateXG(position,skill,pressure){
 let distance=Math.sqrt(
  Math.pow(position.x-450,2)+
  Math.pow(position.y-250,2)
 );

 let chance=1-(distance/700);
 chance*=skill/100;
 chance*=1-(pressure/100);

 return Math.max(0,Math.min(1,chance));
}
