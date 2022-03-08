let canvas = document.getElementById("canvas");
let ctx = canvas.getContex("2d");

let countBlock = 20;
let sizeBlock = 40;
let CB = 0.1;
let game = false;

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

    game = true;

}

function draw() {

    ctx.fillStyle = "#222";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    for(let h = 0; h < countBlock; h++) {

       
        for(let w = 0; w < countBlock; w ++) {
            
            if (blocks[h][w].show) {

                if(blocks[h][w].number == 9) {

                    ctx.beginPath();
                    ctx.fillStyle = "#f00";
                    ctx.arc(w*sizeBlock+sizeBlock/2,h*sizeBlock+sizeBlock/2,sizeBlock/3,0,2*Math.PI,true);
                    ctx.fill();

                    continue;

                }

                ctx.fillStyle = "#555";
                ctx.fillRect(w*sizeBlock,h*sizeBlock,sizeBlock,sizeBlock);

                if(blocks[h][w].number) {

                    ctx.font = "32px serif";
                    ctx.fillStyle = "#ddd";
                    ctx.fillText(blocks[h][x].number, w*sizeBlock +10, (h+1)*sizeBlock -10);

                }


            }
    }
}

    for(let t = 0; t < countBlock + 1; t++) {
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        ctx.moveTo(0,t * sizeBlock);
        ctx.lineTo(canvas.width,t * sizeBlock);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(t * sizeBlock,0);
        ctx.lineTo(t * sizeBlock,canvas.height);
        ctx.stroke();
    }
}

setInterval(draw,25);

canvas.addEventListener('mousedown',function(event){

    if(!game) {
        start();
    }

    let h = Math.floor((event.clientY/sizeBlock));
    let w = Math.floor((event.clientX/sizeBlock));

    if (blocks[h][w].number == 9) {
        console.log('lose');
        game = false;
    }
});