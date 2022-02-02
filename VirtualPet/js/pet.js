let rowFaster = 6;
let rowTogether = 6;
let rowOnCourse = 6;

function fasterButton() {
    if (((rowFaster <= 0) && (rowTogether <= 0) && (rowOnCourse <= 0)) === false) {
        if (rowFaster < 9) {
            rowFaster += 1;
            console.log("row faster meter: " + rowFaster);
        } else {
            rowFaster = 10;
            console.log("row faster meter: " + rowFaster);
        }
        refreshUI();
    }
}

function togetherButton() {
    if (((rowFaster <= 0) && (rowTogether <= 0) && (rowOnCourse <= 0)) === false) {
        if (rowTogether < 9) {
            rowTogether += 1;
            console.log("row together meter: " + rowTogether);
        } else {
            rowTogether = 10;
            console.log("row together meter: " + rowTogether);
        }
        refreshUI();
    }
}

function courseButton() {
    if (((rowFaster <= 0) && (rowTogether <= 0) && (rowOnCourse <= 0)) === false) {
        if (rowOnCourse < 9) {
            rowOnCourse += 1;
            console.log("row on course meter: " + rowOnCourse);
        } else {
            rowOnCourse = 10;
            console.log("row on course meter: " + rowOnCourse);
        }
        refreshUI();
    }
}

function refreshUI() {
    let rowFasterMeter = document.getElementById("rowFaster-meter")
    rowFasterMeter.value = rowFaster;

    let rowFasterParagraph = document.getElementById("rowFaster-paragraph")
    rowFasterParagraph.innerHTML = rowFaster;

    let rowTogetherMeter = document.getElementById("rowTogether-meter")
    rowTogetherMeter.value = rowTogether;

    let rowTogetherParagraph = document.getElementById("rowTogether-paragraph")
    rowTogetherParagraph.innerHTML = rowTogether;

    let onCourseMeter = document.getElementById("onCourse-meter")
    onCourseMeter.value = rowOnCourse;

    let onCourseParagraph = document.getElementById("onCourse-paragraph")
    onCourseParagraph.innerHTML = rowOnCourse;

    let petImg = document.getElementById("pet-img")
    let petParagraph = document.getElementById("pet-condition")
    if ((rowFaster === 0) && (rowTogether === 0) && (rowOnCourse === 0)) {
        petParagraph.innerHTML = "you have flipped";
        petImg.src = "images/flipped-boat.jpg"
    } else if (rowFaster <= 10 && rowFaster > 3 && rowTogether <= 10 && rowTogether > 3 && rowOnCourse <= 2) {
        petImg.src = "images/fast-together-notstraight.jpg";
        petParagraph.innerHTML = "get on course";
    } else if (rowFaster <= 10 && rowFaster > 3 && rowTogether <= 2 && rowOnCourse <= 10 && rowOnCourse > 3) {
        petImg.src = "images/fast-nottogether-straight.jpg";
        petParagraph.innerHTML = "stick together";
    } else if (rowFaster < 3 && rowTogether <= 10 && rowTogether > 3 && rowOnCourse <= 10 && rowOnCourse > 3) {
        petImg.src = "images/slow-together-straight.jpg"
        petParagraph.innerHTML = "row faster"
    } else if (rowFaster < 3 || rowTogether < 3 || rowOnCourse < 3) {
        petImg.src = "images/fast-nottogether-straight.jpg";
        petParagraph.innerHTML = "bring it up!"
    } else if (rowFaster <= 8 && rowTogether <= 8 && rowOnCourse <= 8) {
        petImg.src = "images/fast-together-straight.jpg"
        petParagraph.innerHTML = "nice job"
    } else if (rowFaster <= 10 && rowFaster > 8 && rowTogether <= 10 && rowTogether > 8 && rowOnCourse <= 10 && rowOnCourse > 8) {
        petImg.src = "images/fast-together-straight.jpg"
        petParagraph.innerHTML = "you are killing it!";
    } else
        petParagraph.innerHTML = "Even everything out! ";
}

function decreaseMeter() {
    if (rowFaster > 0) {
        refreshUI();
        rowFaster = rowFaster - 1
    } else {
        rowFaster = 0
    }
}

function decreaseMeter2() {
    if (rowTogether > 0.5) {
        refreshUI();
        rowTogether = rowTogether - 0.5
    } else {
        rowTogether = 0
    }
}

function decreaseMeter3() {
    if (rowOnCourse > -0.25) {
        refreshUI();
        rowOnCourse = rowOnCourse - 0.25
    } else {
        rowOnCourse = 0
    }
}
setInterval(decreaseMeter, 1000);
setInterval(decreaseMeter2, 1000);
setInterval(decreaseMeter3, 1000);