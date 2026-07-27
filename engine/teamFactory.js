import {Player} from './player.js';
import {createPositions} from './formation.js';

export class TeamFactory {
 static create(name,side,formation='4-4-2'){
  const roles=createPositions(formation);

  return roles.map((role,index)=>{
   const x=side==='home'?120:780;
   const y=70+index*35;

   return new Player(
    `${name}_${index+1}`,
    side,
    x,
    y,
    role
   );
  });
 }
}
