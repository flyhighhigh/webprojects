var canvas,ctx;
var painting=false;

window.addEventListener('load',buildpaper);

function buildpaper(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");

    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth/2;
    ctx.lineWidth=10;
    ctx.lineCap='round';

    window.addEventListener('mousedown',start);
    window.addEventListener('mouseup',finish);
    window.addEventListener('mousemove',draw);
}

function draw(e){
    if(!painting)
        return;

    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();//不知道為甚麼 加這行會比較滑順
    ctx.moveTo(e.clientX,e.clientY);
}

function finish(){
    painting=false;
    ctx.beginPath();
}

function start(e){
    painting=true;
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
    //為了畫點
    ctx.lineTo(e.clientX+0.01,e.clientY);
    ctx.stroke();
}