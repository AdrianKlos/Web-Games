let back = new Image()
back.src="Resources/whiteback.jpg"
let rock = []
rock.src="Resources/rock.jpg"
let paper = []
paper.src="Resources/paper.png"
let scissors = []
scissors.src="Resources/scissors.jpg"
let speed= 10
function initialize(){
    drawBackground()
    drawRock()
    drawPaper()
    drawScissors()
    animate()
}
function drawBackground() {
    var ctx = document.getElementById("canvas").getContext("2d");
    back = createImage(back.src,0,0,1700,900)
    ctx.drawImage(back,back.left,back.top,back.width,back.height)
}
function drawRock(){

    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))
    rock.push(createImage(rock.src,375,300,20,20))

}
function drawPaper(){

    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))
    paper.push(createImage(paper.src,850,300,20,20))

}
function drawScissors(){

    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))
    scissors.push(createImage(scissors.src,1275,300,20,20))

}
function moveRock(){

    var ctx = document.getElementById("canvas").getContext("2d");

    for (i = 0; i < rock.length; i++) {

        rock[i].src = "Resources/rock.jpg"

        let directionR = Math.floor(Math.random() * 4) + 1

        if (directionR == 1&&rock[i].top>0) {


            rock[i].top -= Math.floor(Math.random() * speed) + 1


        }
        if (directionR == 2&&rock[i].left<1700) {


            rock[i].left += Math.floor(Math.random() * speed) + 1


        }
        if (directionR == 3&&rock[i].top<900) {


            rock[i].top += Math.floor(Math.random() * speed) + 1


        }
        if (directionR == 4&&rock[i].left>0) {


            rock[i].left -= Math.floor(Math.random() * speed) + 1


        }

        for(j=0;j<paper.length;j++) {

            if (rock[i].left + rock[i].width > paper[j].left && rock[i].left < paper[j].left + paper[j].width &&
                rock[i].top + rock[i].height > paper[j].top && rock[i].top < paper[j].top + paper[j].height) {
                rock[i].src = "Resources/paper.png"
                paper.push(rock[i])
                rock.splice(i,1)
                j--
                speed++
            }
        }
            ctx.drawImage(rock[i], rock[i].left, rock[i].top, rock[i].width, rock[i].height)

    }

}
function movePaper() {

    var ctx = document.getElementById("canvas").getContext("2d");

    for (i = 0; i < paper.length; i++) {

        paper[i].src="Resources/paper.png"

        let directionP = Math.floor(Math.random() * 4) + 1

        if (directionP == 1&&paper[i].top>0) {


            paper[i].top -= Math.floor(Math.random() * speed) + 1


        }
        if (directionP == 2&&paper[i].left<1700) {


            paper[i].left += Math.floor(Math.random() * speed) + 1


        }
        if (directionP == 3&&paper[i].top<900) {


            paper[i].top += Math.floor(Math.random() * speed) + 1


        }
        if (directionP == 4&&paper[i].left>0) {


            paper[i].left -= Math.floor(Math.random() * speed) + 1


        }

        for(j=0;j<scissors.length;j++) {

            if (paper[i].left + paper[i].width > scissors[j].left && paper[i].left < scissors[j].left + scissors[j].width &&
                paper[i].top + paper[i].height > scissors[j].top && paper[i].top < scissors[j].top + scissors[j].height) {
                paper[i].src = "Resources/scissors.jpg"
                scissors.push(paper[i])
                paper.splice(i, 1)
                j--
                speed++

            }

        }

        ctx.drawImage(paper[i], paper[i].left, paper[i].top, paper[i].width, paper[i].height)

    }
}
function moveScissors(){

    var ctx = document.getElementById("canvas").getContext("2d");

    for(i=0;i<scissors.length;i++) {

        scissors[i].src="Resources/scissors.jpg"

        let directionS = Math.floor(Math.random() * 4) + 1

        if (directionS == 1&&scissors[i].top>0) {


            scissors[i].top -= Math.floor(Math.random() * speed) + 1


        }
        if (directionS == 2&&scissors[i].left<1700) {


            scissors[i].left += Math.floor(Math.random() * speed) + 1


        }
        if (directionS == 3&&scissors[i].top<900) {


            scissors[i].top += Math.floor(Math.random() * speed) + 1


        }
        if (directionS == 4&&scissors[i].left>0) {


            scissors[i].left -= Math.floor(Math.random() * speed) + 1


        }

        for(j=0;j<rock.length;j++) {

            if (scissors[i].left + scissors[i].width > rock[j].left && scissors[i].left < rock[j].left + rock[j].width &&
                scissors[i].top + scissors[i].height > rock[j].top && scissors[i].top < rock[j].top + rock[j].height) {
                scissors[i].src = "Resources/rock.jpg"
                rock.push(scissors[i])
                scissors.splice(i, 1)
                j--
                speed++
                
            }
        }

        ctx.drawImage(scissors[i], scissors[i].left, scissors[i].top, scissors[i].width, scissors[i].height)
        
    }
}
function animate() {
    a=requestAnimationFrame(animate);
    drawBackground()
    moveRock()
    movePaper()
    moveScissors()
    update()
}
var createImage = function(src,xco,yco,w,h) {
    var img   = new Image();
    img.src = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis = true;
    return img;
};

function update(){





}