const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
var painting=false;

window.addEventListener('load',buildpaper);

function buildpaper(){
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    ctx.lineWidth=10;
    ctx.lineCap='round';

    canvas.addEventListener('mousedown',start);
    canvas.addEventListener('mouseup',finish);
    canvas.addEventListener('mousemove',draw);
}

function draw(e){
    if(!painting)return;
    
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    
}

function finish(){
    painting=false;
    ctx.beginPath();
}

function start(){
    painting=true;
}