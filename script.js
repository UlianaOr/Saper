let canvas = document.getElementById("canvas");
let ctx = canvas.getContex("2d");

let countBlock = 20;
let sizeBlock = 40;
let CB = 0.1;

canvas.width = countBlock * sizeBlock;
canvas.height = countBlock * sizeBlock;

function draw() {

    ctx.fillStyle = "#222";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}