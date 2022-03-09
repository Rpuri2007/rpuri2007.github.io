let livesCount = 10;
let bossHealth = 3;
let timer = 60;
let levelCounter = 1;
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

class Rectangle {
    constructor(obstacleWidth, obstacleHeight, MAZE_X, MAZE_Y) {
        this.obstacleWidth = obstacleWidth
        this.obstacleHeight = obstacleHeight
        this.MAZE_X = MAZE_X
        this.MAZE_Y = MAZE_Y
    }
}

const rectangles = [new Rectangle(10, 150, 150, 350), new Rectangle(10, 150, 185, 200), new Rectangle(190, 10, 0, 200, ), new Rectangle(10, 450, 250, 100), new Rectangle(10, 75, 250, 0)];
let alertCheck = 0;
let playerXPosition = 30;
let playerYPosition = 450;
let playerXMovement = 0;
let playerYMovement = 0;
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 20;

let playerSpeed = 2;

let obstacleWidth = 10;
let obstacleHeight = 150;
const MAZE_X = 150;
const MAZE_Y = 350;


let obstacleWidth2 = 10;
let obstacleHeight2 = 150;
const MAZE_X2 = 185;
const MAZE_Y2 = 200;

let obstacleWidth3 = 190;
let obstacleHeight3 = 10;
const MAZE_X3 = 0;
const MAZE_Y3 = 200;

let obstacleWidth4 = 10;
let obstacleHeight4 = 450;
const MAZE_X4 = 250;
const MAZE_Y4 = 100;

let obstacleWidth5 = 10;
let obstacleHeight5 = 75;
const MAZE_X5 = 250;
const MAZE_Y5 = 0;

let checkPointWidth = 20;
let checkPointHeight = 20;
const CHECKPOINT_X = 475;
const CHECKPOINT_Y = 475;
let level = 1;

function meterRefresh() {
    let deathMeter = document.getElementById("death-meter")
    deathMeter.value = livesCount;
    let deathParagraph = document.getElementById("death-paragraph")
    deathParagraph.innerHTML = livesCount;
    let bossMeter = document.getElementById("bosshealth-meter")
    bossMeter.value = bossHealth;
    let bossParagraph = document.getElementById("bosshealth-paragraph")
    bossParagraph.innerHTML = bossHealth;
    let timerMeter = document.getElementById("timer-meter")
    timerMeter.value = timer;
    let timerParagraph = document.getElementById("timer-paragraph")
    timerParagraph.innerHTML = timer;
    let levelMeter = document.getElementById("level-meter")
    levelMeter.value = level;
    let levelParagraph = document.getElementById("level-paragraph");
    levelParagraph.innerHTML = level;
}

function refreshUITimer() {
    if (timer > 0) {
        timer--
    } else if (timer === 0) {
        clearInterval(myInterval);
        alert("You lose the game. Refresh to play again.");
    }
}

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "key down code: " + key;


    if (key === 37) {
        playerXMovement = -1
    } else if (key === 39) {
        playerXMovement = 1;
    } else if (key === 38) {
        playerYMovement = -1
    } else
        playerYMovement = 1

}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "key up code: " + key;
    if (key === 37) {
        playerXMovement = 0;
    } else if (key === 39) {
        playerXMovement = 0;
    } else if (key === 38) {
        playerYMovement = 0;
    } else {
        playerYMovement = 0;
    }
}

function drawPlayer() {
    ctx.fillStyle = "orange"
    ctx.fillRect(playerXPosition, playerYPosition, PLAYER_WIDTH, PLAYER_HEIGHT);
}

function movePlayer() {
    playerXPosition += playerSpeed * playerXMovement;
    playerYPosition += playerSpeed * playerYMovement;

    if (playerXPosition < 0) {
        playerXPosition = 0;
    } else if (playerXPosition > 480) {
        playerXPosition = 480;
    } else if (playerYPosition < 0) {
        playerYPosition = 0;
    } else if (playerYPosition > 480) {
        playerYPosition = 480;
    }
}

function drawMaze2() {
    ctx.fillStyle = "black";
    for (i = 0; i < rectangles.length; i++) {
        ctx.fillRect(rectangles[i].MAZE_X, rectangles[i].MAZE_Y, rectangles[i].obstacleWidth, rectangles[i].obstacleHeight);
    }
    ctx.fillStyle = "green";
    ctx.fillRect(CHECKPOINT_X, CHECKPOINT_Y, checkPointWidth, checkPointHeight)
}

function collisionCheck2() {
    console.log("check2")
    if (playerXPosition + PLAYER_WIDTH >= MAZE_X && playerXPosition <= MAZE_X + obstacleWidth && playerYPosition + PLAYER_HEIGHT >= MAZE_Y && playerYPosition <= MAZE_Y + obstacleHeight) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 0) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE_X2 && playerXPosition <= MAZE_X2 + obstacleWidth2 && playerYPosition + PLAYER_HEIGHT >= MAZE_Y2 && playerYPosition <= MAZE_Y2 + obstacleHeight2) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 0) {
            livesCount--;
        } else if (livesCount = 0) {
            alertCheck++;
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE_X3 && playerXPosition <= MAZE_X3 + obstacleWidth3 && playerYPosition + PLAYER_HEIGHT >= MAZE_Y3 && playerYPosition <= MAZE_Y3 + obstacleHeight3) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE_X4 && playerXPosition <= MAZE_X4 + obstacleWidth4 && playerYPosition + PLAYER_HEIGHT >= MAZE_Y4 && playerYPosition <= MAZE_Y4 + obstacleHeight4) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE_X5 && playerXPosition <= MAZE_X5 + obstacleWidth5 && playerYPosition + PLAYER_HEIGHT >= MAZE_Y5 && playerYPosition <= MAZE_Y5 + obstacleHeight5) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= CHECKPOINT_X && playerXPosition <= CHECKPOINT_X + checkPointWidth && playerYPosition + PLAYER_HEIGHT >= CHECKPOINT_Y && playerYPosition <= CHECKPOINT_Y + checkPointHeight) {
        playerXPosition = 30
        playerYPosition = 450
            ++level;
        if (bossHealth > 0) {
            bossHealth--;
        }
    }
}


let obstacle2Width = 10;
let obstacle2Height = 150;
let MAZE2_X = 200;
let MAZE2_Y = 350;

let obstacle2Width2 = 10;
let obstacle2Height2 = 200;
let MAZE2_X2 = 200;
let MAZE2_Y2 = 0;

let obstacle2Width3 = 150;
let obstacle2Height3 = 10;
let MAZE2_X3 = 300;
let MAZE2_Y3 = 350;

let obstacle2Width4 = 10;
let obstacle2Height4 = 350;
let MAZE2_X4 = 250;
let MAZE2_Y4 = 315;

let obstacle2Width5 = 10;
let obstacle2Height5 = 175;
let MAZE2_X5 = 250;
let MAZE2_Y5 = 0;

let checkPointWidth2 = 20;
let checkPointHeight2 = 20;
let CHECKPOINT2_X = 475;
let CHECKPOINT2_Y = 475;



class Rectangle2 {
    constructor(obstacle2Width, obstacle2Height, MAZE2_X, MAZE2_Y) {
        this.obstacle2Width = obstacle2Width
        this.obstacle2Height = obstacle2Height
        this.MAZE2_X = MAZE2_X
        this.MAZE2_Y = MAZE2_Y
    }
}



const rectangles2 = [new Rectangle2(10, 150, 200, 350), new Rectangle2(10, 200, 200, 0), new Rectangle2(150, 10, 300, 350), new Rectangle2(10, 350, 250, 315), new Rectangle2(10, 175, 250, 0)];

function collisionCheck() {
    console.log("check1")
    if (playerXPosition + PLAYER_WIDTH >= MAZE2_X && playerXPosition <= MAZE2_X + obstacle2Width && playerYPosition + PLAYER_HEIGHT >= MAZE2_Y && playerYPosition <= MAZE2_Y + obstacle2Height) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 0) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE2_X2 && playerXPosition <= MAZE2_X2 + obstacle2Width2 && playerYPosition + PLAYER_HEIGHT >= MAZE2_Y2 && playerYPosition <= MAZE2_Y2 + obstacle2Height2) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 0) {
            livesCount--;
        } else if (livesCount = 0) {
            alertCheck++;
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE2_X3 && playerXPosition <= MAZE2_X3 + obstacle2Width3 && playerYPosition + PLAYER_HEIGHT >= MAZE2_Y3 && playerYPosition <= MAZE2_Y3 + obstacle2Height3) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE2_X4 && playerXPosition <= MAZE2_X4 + obstacle2Width4 && playerYPosition + PLAYER_HEIGHT >= MAZE2_Y4 && playerYPosition <= MAZE2_Y4 + obstacle2Height4) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE2_X5 && playerXPosition <= MAZE2_X5 + obstacle2Width5 && playerYPosition + PLAYER_HEIGHT >= MAZE2_Y5 && playerYPosition <= MAZE2_Y5 + obstacle2Height5) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= CHECKPOINT2_X && playerXPosition <= CHECKPOINT2_X + checkPointWidth2 && playerYPosition + PLAYER_HEIGHT >= CHECKPOINT2_Y && playerYPosition <= CHECKPOINT2_Y + checkPointHeight2) {
        playerXPosition = 30
        playerYPosition = 450
            ++level;
        if (bossHealth > 0) {
            bossHealth--;
        }
    }
}

function drawMaze() {
    ctx.fillStyle = "black";
    for (i = 0; i < rectangles2.length; i++) {
        ctx.fillRect(rectangles2[i].MAZE2_X, rectangles2[i].MAZE2_Y, rectangles2[i].obstacle2Width, rectangles2[i].obstacle2Height);
    }
    ctx.fillStyle = "green";
    ctx.fillRect(CHECKPOINT2_X, CHECKPOINT2_Y, checkPointWidth2, checkPointHeight2)
}


function drawMaze3() {
    ctx.fillStyle = "black";
    ctx.fillStyle = "green";
    ctx.fillRect(CHECKPOINT2_X, CHECKPOINT2_Y, checkPointWidth2, checkPointHeight2)
}

function drawCheckpoint() {
    ctx.fillStyle = "green";
    ctx.fillRect(CHECKPOINT_X, CHECKPOINT_Y, checkPointWidth, checkPointHeight)
}

let obstacle3Width = 10;
let obstacle3Height = 150;
let MAZE3_X = 300;
let MAZE3_Y = 350;

let obstacle3Width2 = 10;
let obstacle3Height2 = 200;
let MAZE3_X2 = 200;
let MAZE3_Y2 = 0;

let obstacle3Width3 = 150;
let obstacle3Height3 = 10;
let MAZE3_X3 = 300;
let MAZE3_Y3 = 350;

let obstacle3Width4 = 10;
let obstacle3Height4 = 350;
let MAZE3_X4 = 250;
let MAZE3_Y4 = 300;

let obstacle3Width5 = 175;
let obstacle3Height5 = 10;
let MAZE3_X5 = 0;
let MAZE3_Y5 = 250;

let checkPointWidth3 = 20;
let checkPointHeight3 = 20;
let CHECKPOINT3_X = 475;
let CHECKPOINT3_Y = 475;



class Rectangle3 {
    constructor(obstacle3Width, obstacle3Height, MAZE3_X, MAZE3_Y) {
        this.obstacle3Width = obstacle3Width
        this.obstacle3Height = obstacle3Height
        this.MAZE3_X = MAZE3_X
        this.MAZE3_Y = MAZE3_Y
    }
}



const rectangles3 = [new Rectangle3(10, 150, 300, 350), new Rectangle3(10, 200, 200, 0), new Rectangle3(150, 10, 300, 350), new Rectangle3(10, 350, 250, 300), new Rectangle3(175, 10, 0, 250)];

function collisionCheck3() {
    console.log("check3")
    if (playerXPosition + PLAYER_WIDTH >= MAZE3_X && playerXPosition <= MAZE3_X + obstacle3Width && playerYPosition + PLAYER_HEIGHT >= MAZE3_Y && playerYPosition <= MAZE3_Y + obstacle3Height) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 0) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE3_X2 && playerXPosition <= MAZE3_X2 + obstacle3Width2 && playerYPosition + PLAYER_HEIGHT >= MAZE3_Y2 && playerYPosition <= MAZE3_Y2 + obstacle3Height2) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 0) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE3_X3 && playerXPosition <= MAZE3_X3 + obstacle3Width3 && playerYPosition + PLAYER_HEIGHT >= MAZE3_Y3 && playerYPosition <= MAZE3_Y3 + obstacle3Height3) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE3_X4 && playerXPosition <= MAZE3_X4 + obstacle3Width4 && playerYPosition + PLAYER_HEIGHT >= MAZE3_Y4 && playerYPosition <= MAZE3_Y4 + obstacle3Height4) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= MAZE3_X5 && playerXPosition <= MAZE3_X5 + obstacle3Width5 && playerYPosition + PLAYER_HEIGHT >= MAZE3_Y5 && playerYPosition <= MAZE3_Y5 + obstacle3Height5) {
        playerXPosition = 30
        playerYPosition = 450
        if (livesCount > 1) {
            livesCount--;
        } else {
            alertCheck++
        }
    } else if (playerXPosition + PLAYER_WIDTH >= CHECKPOINT3_X && playerXPosition <= CHECKPOINT3_X + checkPointWidth3 && playerYPosition + PLAYER_HEIGHT >= CHECKPOINT3_Y && playerYPosition <= CHECKPOINT3_Y + checkPointHeight3) {
        clearInterval(myInterval);
        playerXPosition = 30
        playerYPosition = 450
        alert("You win the game! Refresh to play again. ")
    }
}

function checkAlert() {
    if (alertCheck === 1) {
        alert("You lost the game. Refresh to play again.")
        clearInterval(myInterval);
        alertCheck += 2;
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500)
    movePlayer();
    drawPlayer();
    checkAlert();
    meterRefresh();
    if (level === 1) {
        drawMaze();
        collisionCheck();
    } else if (level === 2) {
        drawMaze2();
        collisionCheck2();
    } else if (level === 3) {
        drawMaze3();
        collisionCheck3();
    } else {
        drawCheckpoint();
    }
}

var myInterval = setInterval(refreshUI, 10);
var myInterval2 = setInterval(refreshUITimer, 1000);