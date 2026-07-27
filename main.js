import {Game} from './game/game.js';

const canvas=document.getElementById('game');
const game=new Game(canvas);

function loop(){
 game.update();
 game.render();
 requestAnimationFrame(loop);
}

loop();
