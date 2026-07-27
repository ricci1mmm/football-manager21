const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');

const players=[];
for(let i=0;i<11;i++) players.push({x:100+Math.random()*150,y:80+i*30,team:0});
for(let i=0;i<11;i++) players.push({x:650+Math.random()*150,y:80+i*30,team:1});
const ball={x:450,y:250,vx:2,vy:1};

function update(){
 ball.x+=ball.vx; ball.y+=ball.vy;
 if(ball.y<10||ball.y>490) ball.vy*=-1;
 if(ball.x<10||ball.x>890) ball.vx*=-1;
}

function draw(){
 ctx.clearRect(0,0,900,500);
 ctx.strokeStyle='white';ctx.beginPath();ctx.moveTo(450,0);ctx.lineTo(450,500);ctx.stroke();
 players.forEach(p=>{ctx.fillStyle=p.team?'red':'blue';ctx.beginPath();ctx.arc(p.x,p.y,10,0,Math.PI*2);ctx.fill()});
 ctx.fillStyle='white';ctx.beginPath();ctx.arc(ball.x,ball.y,7,0,Math.PI*2);ctx.fill();
}
function loop(){update();draw();requestAnimationFrame(loop)}
loop();
