export class SaveSystem {
 static save(game){
  return JSON.stringify({
   club:game.club,
   season:game.season,
   state:game.state
  });
 }

 static load(data){
  return JSON.parse(data);
 }
}
