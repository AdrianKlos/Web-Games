var stitch = new Image()
stitch.src = "Resource/stitchShip-removebg-preview.png"

//bad guy Ship
var gantuShip = new Image()
gantuShip.src = "Resource/Gantu_27s_Ship-removebg-preview.png"

//laser for stitch
var blueLaser = new Image()
blueLaser.src = "Resource/blueLaser-removebg-preview.png"

//background image
var back = new Image()
back.src = "Resource/background.jpg"

let badShip=new Image()
badShip.src="Resource/Gantu_27s_Ship-removebg-preview.png"

//let blueLaser=new Image()
blueLaser.src="Resource/blueLaser-removebg-preview.png"
let k= 0
//Make all of your arrays and instance field here
var score = 0

var badShips = []

let redLaser = []
redLaser.src="Resource/redLaser-removebg-preview.png"

let randNum= false
let hitPt
let lives= 3

let powerups=[]

let heart= new Image()
heart.src="Resource/heart.png"

let rocket=new Image()
rocket.src="Resource/rocketPowerUp.png"

let head=new Image()
head.src="Resource/stitchHead.png"

let fastbluelaser= false

let rocketscore= lives

let bunker=[]
bunker.src="Resource/asteriod.png"

let bunkerHits1= 0
let bunkerHits2= 0

let backwards=false

let counter= 0

let tempcount = 0

let orangepotion = new Image()
orangepotion.src="Resource/bottle-2.png"

let orangelaser = new Image()
orangelaser.src = "Resource/orangeLaser.png"

let olenabled=false //ol stands for orange laser

let bonusbadguy= new Image()
bonusbadguy.src="Resource/ship.png"

let userwon = false

let hearts= [] //this is shown on the canvas so the player knows how many lives they have left
hearts.src="Resource/heart.png"
function drawBackground() {
    var ctx = document.getElementById("canvas").getContext("2d");
    back = createImage(back.src,0,0,1000,600)
    ctx.drawImage(back,back.left,back.top,back.width,back.height)
}
//initialize functions onload
function initialize(){
    counting()
    drawBackground();
    stitch = createImage(stitch.src,10,150,130,70)
    drawStitch()
    drawBunker()
    drawbadShips()
    drawbonusbadguy()
    drawBlueLaser()
    drawRedLaser()
    drawOrangeLaser()
    makePower()
    drawHearts()
    animate()

}
function drawHearts(){

    var ctx = document.getElementById("canvas").getContext("2d");
    hearts.push(createImage(hearts.src,10,10,50,50))
    hearts.push(createImage(hearts.src,70,10,50,50))
    hearts.push(createImage(hearts.src,130,10,50,50))
    hearts.push(createImage(hearts.src,190,10,50,50))
    hearts.push(createImage(hearts.src,250,10,50,50))



}
function moveHearts(){

    var ctx = document.getElementById("canvas").getContext("2d");

    if(lives==1){

        ctx.drawImage(hearts[0],hearts[0].left,hearts[0].top,hearts[0].width,hearts[0].height)

    }
    if(lives==2){

        ctx.drawImage(hearts[0],hearts[0].left,hearts[0].top,hearts[0].width,hearts[0].height)
        ctx.drawImage(hearts[1],hearts[1].left,hearts[1].top,hearts[1].width,hearts[1].height)

    }
    if(lives==3){

        ctx.drawImage(hearts[0],hearts[0].left,hearts[0].top,hearts[0].width,hearts[0].height)
        ctx.drawImage(hearts[1],hearts[1].left,hearts[1].top,hearts[1].width,hearts[1].height)
        ctx.drawImage(hearts[2],hearts[2].left,hearts[2].top,hearts[2].width,hearts[2].height)

    }
    if(lives==4){

        ctx.drawImage(hearts[0],hearts[0].left,hearts[0].top,hearts[0].width,hearts[0].height)
        ctx.drawImage(hearts[1],hearts[1].left,hearts[1].top,hearts[1].width,hearts[1].height)
        ctx.drawImage(hearts[2],hearts[2].left,hearts[2].top,hearts[2].width,hearts[2].height)
        ctx.drawImage(hearts[3],hearts[3].left,hearts[3].top,hearts[3].width,hearts[3].height)

    }
    if(lives>=5){

        ctx.drawImage(hearts[0],hearts[0].left,hearts[0].top,hearts[0].width,hearts[0].height)
        ctx.drawImage(hearts[1],hearts[1].left,hearts[1].top,hearts[1].width,hearts[1].height)
        ctx.drawImage(hearts[2],hearts[2].left,hearts[2].top,hearts[2].width,hearts[2].height)
        ctx.drawImage(hearts[3],hearts[3].left,hearts[3].top,hearts[3].width,hearts[3].height)
        ctx.drawImage(hearts[4],hearts[4].left,hearts[4].top,hearts[4].width,hearts[4].height)

    }





}
function drawbonusbadguy(){

    var ctx = document.getElementById("canvas").getContext("2d");
    bonusbadguy = createImage(bonusbadguy.src, 900, 500, 70, 70)



}
function movebonusbadguy(){

    var ctx = document.getElementById("canvas").getContext("2d");

    bonusbadguy.top-=2.5

    if(bonusbadguy.top<=-70){

        bonusbadguy.top = Math.floor(Math.random() * 1000)+1700


    }
    if (bonusbadguy.left + bonusbadguy.width > blueLaser.left && bonusbadguy.left < blueLaser.left + blueLaser.width &&
        bonusbadguy.top + bonusbadguy.height > blueLaser.top && bonusbadguy.top < blueLaser.top + blueLaser.height) {


        if (fastbluelaser == true) {
            rocketscore++
        }
        if (orangelaser == true) {
            bonusbadguy.top = -70
            score+=20
        }
        else{
            blueLaser.left = 1000
            bonusbadguy.top = -70
            score+=20
        }

    }

    ctx.drawImage(bonusbadguy,bonusbadguy.left,bonusbadguy.top,bonusbadguy.width,bonusbadguy.height)

}
function drawOrangeLaser(){

    var ctx = document.getElementById("canvas").getContext("2d");
    orangelaser = createImage(orangelaser.src,10000,300,20,10)

}
function moveOrangeLaser(){
    var ctx = document.getElementById("canvas").getContext("2d");

    orangelaser.left+=5

    if(olenabled==true){

        orangelaser.left=stitch.left
        orangelaser.top=stitch.top

        olenabled=false


    }

    if(orangelaser.left>1000){
        orangelaser.left=10000
    }


    ctx.drawImage(orangelaser,orangelaser.left,orangelaser.top,orangelaser.width,orangelaser.height)

}
function drawBunker(){

    var ctx = document.getElementById("canvas").getContext("2d");
    bunker.push(createImage(bunker.src,200,350,100,100))
    bunker.push(createImage(bunker.src,200,100,100,100))


}
function bunkerRules(){

    var ctx = document.getElementById("canvas").getContext("2d");

    for (i = 0; i < bunker.length; i++) {

        if (bunker[i].left + bunker[i].width > blueLaser.left && bunker[i].left < blueLaser.left + blueLaser.width &&
            bunker[i].top + bunker[i].height > blueLaser.top && bunker[i].top < blueLaser.top + blueLaser.height ) {


            if(i==0){
                bunkerHits1++
            }
            else{
                bunkerHits2++
            }

            blueLaser.left=1000

        }
        if(bunkerHits1<5){

            ctx.drawImage(bunker[0],bunker[0].left,bunker[0].top,bunker[0].width,bunker[0].height)

        }
        else {

            bunker[0].left=-1000

        }
        if(bunkerHits2<5){

            ctx.drawImage(bunker[1],bunker[1].left,bunker[1].top,bunker[1].width,bunker[1].height)

        }
        else{
            bunker[1].left=-1000
        }


    }



}
function makePower(){
    powerups.push(createImage(heart.src,0,0,50,50))
    powerups.push(createImage(rocket.src,0,0,50,50))
    powerups.push(createImage(head.src,0,0,50,50))
    powerups.push(createImage(orangepotion.src,0,0,50,50))

}
function movePower(){

    var ctx = document.getElementById("canvas").getContext("2d");

    for (i = 0; i < powerups.length; i++) {

        powerups[i].left -= 5

        if (powerups[i].left < 0) {

            powerups[i].left = Math.floor(Math.random() * 10000)+1000
            powerups[i].top = Math.floor(Math.random() * 600)

        }
        if (powerups[i].left + powerups[i].width > stitch.left && powerups[i].left < stitch.left + stitch.width &&
            powerups[i].top + powerups[i].height > stitch.top && powerups[i].top < stitch.top + stitch.height ) {

            powerups[i].left=-100

            if(i==0){


                lives++


            }
            if(i==1){


                fastbluelaser = true


            }
            if(i==2){


                backwards=true



            }
            if(i==3){

                olenabled=true



            }



        }
        ctx.drawImage(powerups[i],powerups[i].left,powerups[i].top,powerups[i].width,powerups[i].height)
    }

}
function backwardships(){


    if(backwards==true){
        if(tempcount==0) {
            tempcount = counter
        }

        if(tempcount+5>counter) {
            var ctx = document.getElementById("canvas").getContext("2d");

            for (i = 0; i < badShips.length; i++) {

                if (badShips[i].top < 35) {
                    k = 1
                    for (j = 0; j < badShips.length; j++) {
                        badShips[j].left += 2.5
                    }
                }
                if (badShips[badShips.length - 1].top > 530) {
                    k = 0
                    badShips[i].left += 5
                }

                if (k == 0) {
                    badShips[i].top -= 5


                }
                if (k == 1) {
                    badShips[i].top += 5


                }
                if (badShips[i].left + badShips[i].width > blueLaser.left && badShips[i].left < blueLaser.left + blueLaser.width &&
                    badShips[i].top + badShips[i].height > blueLaser.top && badShips[i].top < blueLaser.top + blueLaser.height) {

                    blueLaser.left = 1000
                    badShips[i].left = 20000
                    score++
                    badShips[i].vis = false
                    if (fastbluelaser == true) {
                        rocketscore++
                    }

                }
                if (badShips[i].left + badShips[i].width > stitch.left && badShips[i].left < stitch.left + stitch.width &&
                    badShips[i].top + badShips[i].height > stitch.top && badShips[i].top < stitch.top + stitch.height) {

                    stitch.left = -1000
                    lives = 0


                }

                if (bunker[0].left + bunker[0].width > badShips[i].left && bunker[0].left < badShips[i].left + badShips[i].width &&
                    bunker[0].top + bunker[0].height > badShips[i].top && bunker[0].top < badShips[i].top + badShips[i].height) {

                    bunkerHits1++
                    bunker[0].left = -1000

                }
                if (bunker[1].left + bunker[1].width > badShips[i].left && bunker[1].left < badShips[i].left + badShips[i].width &&
                    bunker[1].top + bunker[1].height > badShips[i].top && bunker[1].top < badShips[i].top + badShips[i].height) {

                    bunkerHits2++
                    bunker[1].left = -1000

                }
                if (badShips[i].vis == true) {
                    ctx.drawImage(badShips[i], badShips[i].left, badShips[i].top, badShips[i].width, badShips[i].height)
                }


            }


        }
        else {
            backwards = false
            tempcount = 0
        }

    }

}
function drawStitch(){

    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(stitch,stitch.left,stitch.top,stitch.width,stitch.height)

}
function drawRedLaser(){

    var ctx = document.getElementById("canvas").getContext("2d");
    redLaser.push(createImage(redLaser.src,-103,300,100,10))
    redLaser.push(createImage(redLaser.src,-102,300,100,10))
    redLaser.push(createImage(redLaser.src,-101,300,100,10))



}
function moveRedLaser(){

    if(randNum==false){

        hitPt=Math.floor(Math.random() * -3000);
        randNum=true

    }

    for(i=0; i<redLaser.length; i++) {

        var ctx = document.getElementById("canvas").getContext("2d");

        redLaser[i].left -= 5

        if(redLaser[i].left<=hitPt){

            redLaser[i].left=badShips[Math.floor(Math.random() * badShips.length)].left
            redLaser[i].top=badShips[Math.floor(Math.random() * badShips.length)].top
            randNum=false
            if(randNum==false){

                hitPt=Math.floor(Math.random() * -3000);
                randNum=true

            }
        }

        if(redLaser[i].left<=-3000){

            redLaser[i].left=-100


        }

        if (redLaser[i].left + redLaser[i].width > stitch.left && redLaser[i].left < stitch.left + stitch.width &&
            redLaser[i].top + redLaser[i].height > stitch.top && redLaser[i].top < stitch.top + stitch.height ) {

            redLaser[i].left=-100
            lives--



        }
        if (bunker[0].left + bunker[0].width > redLaser[i].left && bunker[0].left < redLaser[i].left + redLaser[i].width &&
            bunker[0].top + bunker[0].height > redLaser[i].top && bunker[0].top < redLaser[i].top + redLaser[i].height) {

            bunkerHits1++
            redLaser[i].left=-1000

        }
        if (bunker[1].left + bunker[1].width > redLaser[i].left && bunker[1].left < redLaser[i].left + redLaser[i].width &&
            bunker[1].top + bunker[1].height > redLaser[i].top && bunker[1].top < redLaser[i].top + redLaser[i].height) {

            bunkerHits2++
            redLaser[i].left=-1000

        }
        ctx.drawImage(redLaser[i], redLaser[i].left, redLaser[i].top, redLaser[i].width, redLaser[i].height)

    }




}
function drawBlueLaser(){

    var ctx = document.getElementById("canvas").getContext("2d");
    blueLaser = createImage(blueLaser.src,1000,300,100,10)


}
function moveBlueLaser(){

    var ctx = document.getElementById("canvas").getContext("2d");
    if(fastbluelaser==false) {
        blueLaser.left += 5
    }
    else {

        if(rocketscore>lives+4) {
            rocketscore=lives
            fastbluelaser=false
        }
        else{
            blueLaser.left += 50
        }
    }
    ctx.drawImage(blueLaser,blueLaser.left,blueLaser.top,blueLaser.width,blueLaser.height)


}
function drawbadShips(){



        badShips.push(createImage(badShip.src, 800, 120, 70, 70))
        badShips.push(createImage(badShip.src, 800, 190, 70, 70))
        badShips.push(createImage(badShip.src, 800, 260, 70, 70))
        badShips.push(createImage(badShip.src, 800, 330, 70, 70))

        badShips.push(createImage(badShip.src, 700, 120, 70, 70))
        badShips.push(createImage(badShip.src, 700, 190, 70, 70))
        badShips.push(createImage(badShip.src, 700, 260, 70, 70))
        badShips.push(createImage(badShip.src, 700, 330, 70, 70))

        badShips.push(createImage(badShip.src, 600, 120, 70, 70))
        badShips.push(createImage(badShip.src, 600, 190, 70, 70))
        badShips.push(createImage(badShip.src, 600, 260, 70, 70))
        badShips.push(createImage(badShip.src, 600, 330, 70, 70))


}
function movebadShips(){



    if(backwards==false){
        var ctx = document.getElementById("canvas").getContext("2d");

        for (i = 0; i < badShips.length; i++) {

            if (badShips[i].top < 0) {
                k = 1
                for (j = 0; j < badShips.length; j++) {
                    badShips[j].left -= 2.5
                }
            }
            if (badShips[badShips.length - 1].top > 530) {
                k = 0
                badShips[i].left -= 5
            }

            if (k == 0) {
                badShips[i].top -= 5


            }
            if (k == 1) {
                badShips[i].top += 5


            }
            if (badShips[i].left + badShips[i].width > blueLaser.left && badShips[i].left < blueLaser.left + blueLaser.width &&
                badShips[i].top + badShips[i].height > blueLaser.top && badShips[i].top < blueLaser.top + blueLaser.height) {

                blueLaser.left = 1000
                badShips[i].left = 20000
                score++
                badShips[i].vis = false
                if (fastbluelaser == true) {
                    rocketscore++
                }

            }
            if (badShips[i].left + badShips[i].width > orangelaser.left && badShips[i].left < orangelaser.left + orangelaser.width &&
                badShips[i].top + badShips[i].height > orangelaser.top && badShips[i].top < orangelaser.top + orangelaser.height) {


                badShips[i].left = 20000
                score++
                badShips[i].vis = false

            }
            if (badShips[i].left + badShips[i].width > stitch.left && badShips[i].left < stitch.left + stitch.width &&
                badShips[i].top + badShips[i].height > stitch.top && badShips[i].top < stitch.top + stitch.height) {

                stitch.left = -1000
                lives = 0


            }

            if (bunker[0].left + bunker[0].width > badShips[i].left && bunker[0].left < badShips[i].left + badShips[i].width &&
                bunker[0].top + bunker[0].height > badShips[i].top && bunker[0].top < badShips[i].top + badShips[i].height) {

                bunkerHits1++
                bunker[0].left = -1000

            }
            if (bunker[1].left + bunker[1].width > badShips[i].left && bunker[1].left < badShips[i].left + badShips[i].width &&
                bunker[1].top + bunker[1].height > badShips[i].top && bunker[1].top < badShips[i].top + badShips[i].height) {

                bunkerHits2++
                bunker[1].left = -1000

            }
            if (badShips[i].vis == true) {
                ctx.drawImage(badShips[i], badShips[i].left, badShips[i].top, badShips[i].width, badShips[i].height)
            }


        }

    }

}

//You may or may not need this function.  Remember you can add other properties inside the function if you want.
var createImage = function(src,xco,yco,w,h) {
    var img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis = true;
    return img;
};

/*
this code allows you to use the keyboard.  It is written in Jquery.  Jquery is version of javascript that is downloaded
as a library.  The download line is in the header of the html.  Each of the keycodes below can be found in the
ASCII table.
 */
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if((keycode == 87 || keycode == 38)&&stitch.top>0)
    {
        stitch.top-=10

    }
    if((keycode == 83 || keycode == 40)&&stitch.top<530)
    {
        stitch.top+=10
    }
    if(keycode==32&&blueLaser.left>1000){

        blueLaser.left=stitch.left
        blueLaser.top=stitch.top

    }

});

//Anything that needs to be drawn on the screen should be in this function.  Make sure it is abstracted
function animate() {
    a=requestAnimationFrame(animate);
    drawBackground()
    drawStitch()
    bunkerRules()
    movebadShips()
    backwardships()
    movebonusbadguy()
    moveBlueLaser()
    moveRedLaser()
    moveOrangeLaser()
    movePower()
    moveHearts()
    update()

}

function counting(){



    let interval = setInterval(function () {}, 1000);

    setInterval(function () {


        counter++


    }, 1000);

    clearInterval(interval)

}
function update(){

    document.getElementById("score").innerHTML="Score: "+score
    document.getElementById("lives").innerHTML="Lives: "+lives


    const ctx = canvas.getContext("2d");
    ctx.font = "50px Times Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Score: "+score, 800, 50, );

    if(lives<=0){

        alert("You lost the game.")
        lives="Please reset the game."
        score="Please reset the game."
        document.getElementById("canvas").width=0
        document.getElementById("canvas").height=0
    }
    j=0
    for(i=0; i<12; i++) {

        if (badShips[i].vis == false) {

            j++

        }
        if(j==12){

            userwon=true
            j=0

        }
    }
    if(userwon==true){

        alert("You won the game!")
        lives="Please reset the game."
        score="Please reset the game."
        document.getElementById("canvas").width=0
        document.getElementById("canvas").height=0
        userwon=false
        for (i = 0; i < badShips.length; i++) {
            badShips[i].vis = true
            if(i<=3) {
                badShips[i].left = 800
            }
            if(i<=7&&i>3) {
                badShips[i].left = 700
            }
            if(i>7) {
                badShips[i].left = 600
            }
        }

    }

    if(backwards==true){

        backwardships()

    }

}
function reset(){
    document.getElementById("canvas").width=1000
    document.getElementById("canvas").height=600
    stitch.left=10
    bunkerHits1=0
    bunkerHits2=0
    bunker[0].left=200
    bunker[1].left=200
    score=0
    lives=3
    olenabled=false
    backwards=false
    fastbluelaser=false
    for (i = 0; i < badShips.length; i++) {
        badShips[i].vis = true
            if(i<=3) {
                badShips[i].left = 800
            }
            if(i<=7&&i>3) {
                badShips[i].left = 700
            }
            if(i>7) {
                badShips[i].left = 600
            }
    }
}
function devheart(){
    lives++
}
function devrocket(){
    fastbluelaser = true
}
function devstitch(){
    backwards = true
}
function devorange(){
    olenabled=true
}