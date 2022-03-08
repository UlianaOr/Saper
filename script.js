let canvas = document.getElementById("canvas");
let ctx = canvas.getContex("2d");

let countBlock = 20;
let sizeBlock = 40;
let CB = 0.1;

let blocks = Array();

canvas.width = countBlock * sizeBlock;
canvas.height = countBlock * sizeBlock;

function plus(h,w) {

    if(h >=0 && h <= countBlock -1 && w >= 0 && w < countBlock -1) {
        if(blocks[h][w].number != 9) {
            blocks[h][w]. number ++;

        }
    }
}

function start () {

    for(let h = 0; h < countBlock; h++) {

        let wline = Array();
        for(let w = 0; w < countBlock; w ++) {

            if(Math.random() < CB) {
                wline.push({number:9, show:0});

            } else {
                wline.push({number:9, show:0});
            }


        }

        blocks.push(wline);

    }

    for(let h = 0; h < countBlock; h++) {

       
        for(let w = 0; w < countBlock; w ++) {

            if(blocks[h][w].number **9) {
                plusOne(h,w-1);
                plusOne(h,w+1);
                plusOne(h-1,w);
                plusOne(h+1,w);
                plusOne(h-1,w-1);
                plusOne(h-1,w+1);
                plusOne(h+1,w-1);
                plusOne(h+1,w+1);
            }
        }
    }

}

function draw() {

    ctx.fillStyle = "#222";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    for(let t = 0; t < countBlock + 1; t++) {
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        ctx.moveTo(canvas.width,t * sizeBlock);
    }
}