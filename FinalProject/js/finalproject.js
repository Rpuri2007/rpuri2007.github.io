let livesCount = 10;
let bossHealth = 3;
let timer = 60;
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
let level = 0

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
}

function refreshUITimer() {
    if (timer > 0) {
        timer--
    } else {
        alert("you lose")
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

function drawMaze() {
    ctx.fillStyle = "black";
    for (i = 0; i < rectangles.length; i++) {
        ctx.fillRect(rectangles[i].MAZE_X, rectangles[i].MAZE_Y, rectangles[i].obstacleWidth, rectangles[i].obstacleHeight);
    }
    /*
    ctx.fillRect(MAZE_X, MAZE_Y, obstacleWidth, obstacleHeight)
    ctx.fillRect(MAZE_X2, MAZE_Y2, obstacleWidth2, obstacleHeight2)
    ctx.fillRect(MAZE_X3, MAZE_Y3, obstacleWidth3, obstacleHeight3)
    ctx.fillRect(MAZE_X4, MAZE_Y4, obstacleWidth4, obstacleHeight4)
    ctx.fillRect(MAZE_X5, MAZE_Y5, obstacleWidth5, obstacleHeight5)
    ctx.fillStyle = "green";
    ctx.fillRect(CHECKPOINT_X, CHECKPOINT_Y, checkPointWidth, checkPointHeight)
*/
    ctx.fillStyle = "green";
    ctx.fillRect(CHECKPOINT_X, CHECKPOINT_Y, checkPointWidth, checkPointHeight)
}

function collisionCheck() {
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
        if (bossHealth > 0) {
            bossHealth--;
        } else {
            alertCheck += 2;
        }
    }
}

function checkAlert() {
    if (alertCheck === 1) {
        alert("You lose the game")
        alertCheck += 2;
    } else if (alertCheck === 2) {
        alert("You win the game!")
        alertCheck++;
    }

}

class Rectangle2 {
    constructor(obstacleWidth, obstacleHeight, MAZE_X, MAZE_Y) {
        this.obstacleWidth = obstacleWidth
        this.obstacleHeight = obstacleHeight
        this.MAZE_X = MAZE_X
        this.MAZE_Y = MAZE_Y
    }
}

const rectangles2 = [new Rectangle2(30, 150, 150, 350), new Rectangle2(10, 150, 185, 200), new Rectangle2(190, 10, 0, 200, ), new Rectangle2(10, 450, 250, 100), new Rectangle2(10, 75, 250, 0)];

function drawMaze2() {
    ctx.fillStyle = "black";
    for (i = 0; i < rectangles2.length; i++) {
        ctx.fillRect(rectangles2[i].MAZE_X, rectangles2[i].MAZE_Y, rectangles2[i].obstacleWidth, rectangles2[i].obstacleHeight);
    }
}

function levelCheck() {
    if (playerXPosition + PLAYER_WIDTH >= CHECKPOINT_X && playerXPosition <= CHECKPOINT_X + checkPointWidth && playerYPosition + PLAYER_HEIGHT >= CHECKPOINT_Y && playerYPosition <= CHECKPOINT_Y + checkPointHeight) {
        ++level;
    }
}



function refreshUI() {
    ctx.clearRect(0, 0, 500, 500)
    movePlayer();
    drawPlayer();
    checkAlert();
    collisionCheck();
    meterRefresh();
    if (level === 0) {
        drawMaze();
    } else if (level === 1) {
        drawMaze2();
    }
}

setInterval(refreshUI, 10);
setInterval(refreshUITimer, 1000);