export const TACTICS={
 '4-4-2':{
  defence:4,
  midfield:4,
  attack:2,
  pressing:50
 },
 '4-3-3':{
  defence:4,
  midfield:3,
  attack:3,
  pressing:70
 },
 '5-3-2':{
  defence:5,
  midfield:3,
  attack:2,
  pressing:30
 }
};

export function getTactic(name){
 return TACTICS[name]||TACTICS['4-4-2'];
}
