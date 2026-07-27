export class TrainingSystem {
 train(player, type='technical'){
  const gains={
   technical:0.2,
   fitness:0.15,
   shooting:0.25,
   defence:0.2
  };

  player.rating=Math.min(
   99,
   player.rating+(gains[type]||0.1)
  );

  player.form=Math.min(100,player.form+1);
 }
}
