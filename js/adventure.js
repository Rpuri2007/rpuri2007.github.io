playAgain = "yes";
//play again used for end function of playing again
//everything is under this while loop
while (playAgain === "yes") {
    firstMessage = "You have arrived at the field of flowers.";
    firstMessage = firstMessage + " Your curiosity keeps you rooted to the spot.";
    firstMessage = firstMessage + " Before you are two simple buttons with complex meanings.";
    firstMessage = firstMessage + " Choose wisely.";
    //printing first message
    alert(firstMessage);
    //player path  is used to make sure while loop runs again if user isn't cooperative
    let playerPath = 1;
    while (playerPath === 1) {
        firstDecision = parseInt(prompt("Type 1 for the blue button or 2 for the red button. "));
        if (firstDecision === 1) {
            //using + 1 which will exit the while loop
            playerPath = playerPath + 1;
        } else if (firstDecision === 2) {
            playerPath = playerPath + 1;
        } else {
            alert("Try again. Pick either 1 or 2.");
            // no + 1 means the loop will run again
        }
    }

    //randomizing number
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    secondMessage = "";
    //path 1 which is Harry Potter
    if (randomNumber === firstDecision) {
        secondMessage = "You have been teleported to a world full of magic!";
        secondMessage = secondMessage + " As you orient yourself with your surroundings,";
        secondMessage = secondMessage + " you realize that the place you are in is quite familiar.";
        secondMessage = secondMessage + " That is when you realize, that this is the world you have";
        secondMessage = secondMessage + " grown up reading about. Harry Potter!";
        secondMessage = secondMessage + " In the corner you spy a menacing cloaked figure walking towards you.";
        secondMessage = secondMessage + " You feel a wand resonating with power tucked away in your neat robes.";
        //printing second message
        alert(secondMessage);
        //setup stage for while loop
        finalMessage = "";
        while (playerPath === 2) {
            //no randamizing since if else statement leads to different outcomes
            secondDecision = parseInt(prompt("Type 1 if you want to run away or 2 if you want to hear what this person has to say."));
            //decisions within first if loop
            if (secondDecision === 1) {
                finalMessage = "You have walked away from the opportunity of a life time";
                finalMessage = finalMessage + " and are left alone in the harsh world.";
                alert(finalMessage);
                playerPath = playerPath + 1;
            } else if (secondDecision === 2) {
                finalMessage = "The strager gives you a starting amount of 1 billion galleons";
                finalMessage = finalMessage + " to spend on anything you want! Have fun!";
                alert(finalMessage);
                playerPath = playerPath + 1;
            } else
            //used incase user is not cooperative
                alert("Please answer the question! Your life depends on it!");
        }
        //path 2 which is Star Wars 
    } else {
        secondMessage = "As soon as you press the button, you get teleported into a spaceship";
        secondMessage = secondMessage + " as it seems on first impressions.";
        secondMessage = secondMessage + " You look out the window and see the starry night from space.";
        secondMessage = secondMessage + " That is when it strikes you! You have been taken to Star Wars!";
        secondMessage = secondMessage + " As you orient yourself, a stone trooper opens the door and";
        secondMessage = secondMessage + " immideatly freezes when they see you.";
        //printing second message
        alert(secondMessage);
        while (playerPath === 2) {
            //no randamizing since if else statement leads to different outcomes
            secondDecision = parseInt(prompt("Type 1 if you want to break out of the ship or 2 if you want to stay."));
            if (secondDecision === 1) {
                finalMessage = "You break the window and jump out of the ship without realizing";
                finalMessage = finalMessage + " that you are now alone floating in space.";
                alert(finalMessage);
                playerPath = playerPath + 1;
            } else if (secondDecision === 2) {
                finalMessage = " The storm trooper turns out to be good and believes that you are worthy";
                finalMessage = finalMessage + " and so they crown you as the king of the ship!";
                alert(finalMessage);
                playerPath = playerPath + 1;
            } else {
                //used incase is not cooperative
                alert("Please answer the question! Your life depends on it!");
            }
        }
    }
    playAgain = prompt("Do you want to play again? Type yes or no.");
    //used for play again feature used at the start of the program
}
alert("Thanks for playing! Come back soon!");