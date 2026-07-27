export class PlayerDevelopment {
 improve(player,training){
  const bonus={
   attack:0.3,
   defence:0.25,
   fitness:0.2,
   technical:0.35
  };

  const value=bonus[training] || 0.1;

  player.rating=Math.min(
   99,
   player.rating+value
  );

  if(player.age<23){
   player.potential=Math.min(99,(player.potential||80)+0.1);
  }
 }
}
