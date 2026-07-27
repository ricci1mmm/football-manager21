export function tackle(defender, attacker){
 const defence=defender.skill+Math.random()*30;
 const attack=attacker.skill+Math.random()*30;

 if(defence>attack){
  return {
   success:true,
   message:'Ball recovered'
  };
 }

 return {
  success:false,
  message:'Foul risk'
 };
}
