export const TeamStyles={
 ATTACKING:{
  tempo:80,
  pressing:75,
  risk:70
 },
 BALANCED:{
  tempo:50,
  pressing:50,
  risk:50
 },
 DEFENSIVE:{
  tempo:30,
  pressing:25,
  risk:20
 },
 COUNTER:{
  tempo:90,
  pressing:35,
  risk:80
 }
};

export function getStyle(name){
 return TeamStyles[name] || TeamStyles.BALANCED;
}
