var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var radius = canvas.height/2;
ctx.translate(radius,radius);
radius*=0.9;

window.addEventListener('load',draw());

function draw(){
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle="#ffffff";
    ctx.fill();
}


