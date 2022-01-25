function magicAlgorithm(numLikes, comment, shares, favorites) {
    let rank = 0;
    if (numLikes >= 10000 && shares >= 1000 && favorites >= 1000 && comment.includes("great video")) {
        rank = 1;
    } else if (numLikes >= 500 && shares >= 50 && favorites >= 100 && comment.includes("nice video")) {
        rank = 10;
    } else {
        rank = 100;
    }
    return rank;
}

alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now.");

let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
let comment = prompt("What is the most recent comment for this video?");
let shares = prompt("How many times was this video shared?")
let favorites = prompt("How many times was this video favorited?")
let rankResult = magicAlgorithm(likeCount, comment, shares, favorites);
let resultString = "Based off of the magic algorithm, this video's rank is: " + rankResult;

alert(resultString);