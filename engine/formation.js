export const FORMATIONS={
 '4-4-2':[
  'GK','RB','CB','CB','LB','RM','CM','CM','LM','ST','ST'
 ],
 '4-3-3':[
  'GK','RB','CB','CB','LB','CM','CM','CM','RW','ST','LW'
 ],
 '3-5-2':[
  'GK','CB','CB','CB','RM','CM','CM','CM','LM','ST','ST'
 ]
};

export function createPositions(type){
 return FORMATIONS[type] || FORMATIONS['4-4-2'];
}
