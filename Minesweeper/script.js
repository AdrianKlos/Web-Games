let numbers = [];
let flags = [];

// Box dimensions
let bw = 710;
let bh = 520;

let mines = 40;

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

const flag = new Image();
flag.src = 'Resources/flag.webp';

const bomb = new Image();
bomb.src = 'Resources/bomb.png';

let start = false;

let wouldBeBomb = -1;

// Draw the game board
function drawBoard() {
    for (let y = 0; y <= bh; y += 40) {
        for (let x = 0; x <= bw; x += 40) {
            ctx.fillStyle = "gray";
            ctx.fillRect(x, y, 40, 40);
            ctx.strokeStyle = "black";
            ctx.strokeRect(x, y, 40, 40);
            numbers.push(0);
        }
    }
}

// Get block index clicked
function getBlockClicked(xm, ym) {
    let i = 0;
    for (let y = 0; y <= bh; y += 40) {
        for (let x = 0; x <= bw; x += 40) {
            if (xm >= x && xm < x + 40 && ym >= y && ym < y + 40) {
                if (start == false) {
                    numbers[i] = -1;
                    start = true;
                    addMines();
                    numbers[i] = 0;
                    //bombs are not allowed to be placed next to the first block the user clicks on
                    if (getBlock(xm + 40, ym)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm - 40, ym)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm, ym + 40)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm, ym - 40)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm + 40, ym - 40)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm - 40, ym + 40)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm + 40, ym + 40)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                    if (getBlock(xm - 40, ym - 40)==9){
                        numbers[wouldBeBomb] = 0;
                        mines--;
                    }
                }
                if (numbers[i] == 9) {

                    ctx.fillStyle = "white";
                    ctx.fillRect(x, y, 40, 40);
                    ctx.strokeStyle = "black";
                    ctx.strokeRect(x, y, 40, 40);

                    ctx.drawImage(bomb, x, y, 40, 40);

                } else {
                    // Display the number
                    ctx.fillStyle = "white";
                    ctx.fillRect(x, y, 40, 40);
                    ctx.strokeStyle = "black";
                    ctx.strokeRect(x, y, 40, 40);

                    let number = "";
                    if (numbers[i] != 0){
                        number = String(numbers[i])
                    }
                    else if (numbers[i] == 0){
                        //reveal adjacent blocks
                        for (r = 1; r < 3; r++) {
                            getBlockClicked2(xm + 40 * r, ym);
                            getBlockClicked2(xm - 40 * r, ym);
                            getBlockClicked2(xm, ym + 40 * r);
                            getBlockClicked2(xm, ym - 40 * r);

                            getBlockClicked2(xm + 40 * r/2, ym - 40 * r/2);
                            getBlockClicked2(xm - 40 * r/2, ym + 40 * r/2);
                            getBlockClicked2(xm + 40 * r/2, ym + 40 * r/2);
                            getBlockClicked2(xm - 40 * r/2, ym - 40 * r/2);
                        }
                    }
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(number, x + 11, y + 30);
                }
            }
            i++;
        }
    }
}
// Get adjacent blocks from previous function
function getBlockClicked2(xm, ym) {
    let i = 0;
    for (let y = 0; y <= bh; y += 40) {
        for (let x = 0; x <= bw; x += 40) {
            if (xm >= x && xm < x + 40 && ym >= y && ym < y + 40) {
                if (numbers[i] != 9) {
                    // Display the number
                    ctx.fillStyle = "white";
                    ctx.fillRect(x, y, 40, 40);
                    ctx.strokeStyle = "black";
                    ctx.strokeRect(x, y, 40, 40);

                    let number = ""
                    if (numbers[i] != 0){
                        number = String(numbers[i])
                    }
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(number, x + 11, y + 30);
                }
            }
            i++;
        }
    }
}
// Returns block array number (numbers[])
function getBlock(xm, ym) {
    let i = 0;
    for (let y = 0; y <= bh; y += 40) {
        for (let x = 0; x <= bw; x += 40) {
            if (xm >= x && xm < x + 40 && ym >= y && ym < y + 40) {
                wouldBeBomb = i;
                return numbers[wouldBeBomb];
            }
            i++;
        }
    }
}
function plantFlag(xm, ym) {
    let i = 0;
    for (let y = 0; y <= bh; y += 40) {
        for (let x = 0; x <= bw; x += 40) {
            if (xm >= x && xm < x + 40 && ym >= y && ym < y + 40) {
                if (flags.length == 0) {

                    ctx.drawImage(flag, x, y, 40, 40);
                    flags.push(x*y);


                }
                else {
                    let n = 0
                    for (j = 0; j < flags.length; j++) {
                        if (flags[j] == x * y) { //checks if that block is already flagged

                            flags.splice(j, 1);
                            ctx.fillStyle = "gray";
                            ctx.fillRect(x, y, 40, 40);
                            ctx.strokeStyle = "black";
                            ctx.strokeRect(x, y, 40, 40);
                            n++;


                        }
                    }
                    if (n == 0) {

                        ctx.drawImage(flag, x, y, 40, 40);
                        flags.push(x*y);

                    }
                }
            }
            i++;
        }
    }

}
// Place mines at random locations
function addMines() {
    let placedMines = 0;
    while (placedMines < mines) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        if (numbers[randomIndex] !== 9 && numbers[randomIndex] !== -1) {
            numbers[randomIndex] = 9;
            placedMines++;
            numbers[randomIndex + 1] = (numbers[randomIndex + 1] == 9) ? numbers[randomIndex + 1] : numbers[randomIndex + 1]+=1;
            numbers[randomIndex - 1] = (numbers[randomIndex - 1] == 9) ? numbers[randomIndex - 1] : numbers[randomIndex - 1]+=1;
            numbers[randomIndex + 17] = (numbers[randomIndex + 17] == 9) ? numbers[randomIndex + 17] : numbers[randomIndex + 17]+=1;
            numbers[randomIndex - 17] = (numbers[randomIndex - 17] == 9) ? numbers[randomIndex - 17] : numbers[randomIndex - 17]+=1;
            numbers[randomIndex + 18] = (numbers[randomIndex + 18] == 9) ? numbers[randomIndex + 18] : numbers[randomIndex + 18]+=1;
            numbers[randomIndex - 18] = (numbers[randomIndex - 18] == 9) ? numbers[randomIndex - 18] : numbers[randomIndex - 18]+=1;
            numbers[randomIndex + 19] = (numbers[randomIndex + 19] == 9) ? numbers[randomIndex + 19] : numbers[randomIndex + 19]+=1;
            numbers[randomIndex - 19] = (numbers[randomIndex - 19] == 9) ? numbers[randomIndex - 19] : numbers[randomIndex - 19]+=1;
        }
    }
}

// Handle user click
function getCursorPosition(c, event, t) {
    const rect = c.getBoundingClientRect();
    const xm = event.clientX - rect.left;
    const ym = event.clientY - rect.top;
    if (t == 1) {
        getBlockClicked(xm, ym);
    }
    else {
        plantFlag(xm, ym);
    }
    document.getElementById("flagged").innerText = "Flagged: " + flags.length + "/" + mines
}

// Initialize the game
function int() {
    c.addEventListener('mousedown', function(event) {
        if (event.button == 0) {
            // Left click
            getCursorPosition(c, event, 1);
        } else if (event.button == 2) {
            // Right click
            getCursorPosition(c, event, 2);
        }
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
    drawBoard();
}

int();
