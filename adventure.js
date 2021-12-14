firstMessage = "You have arrived at the field of flowers.";
firstMessage = firstMessage + " Your curiosity keeps you rooted to the spot.";
firstMessage = firstMessage + " Before you are two simple buttons with complex meanings.";
firstMessage = firstMessage + " Choose wisely.";
alert(firstMessage);
let playerPath = 1;
while (playerPath === 1) {
    firstDecision = prompt("Type \"b\" for the blue button or \"r\" for the red button. ");
    if (firstDecision === "b") {
        playerPath = playerPath + 1;
    } else if (firstDecision === "r") {
        playerPath = playerPath + 1;
    } else {
        alert("Try again. Pick either \"r\" or \"b\".");
    }

}